let trails = [];
let staticStars = [];

function setup() {
  createCanvas(600, 600);
  noStroke();
  // Create some static stars for the background
  for (let i = 0; i < 150; i++) {
    staticStars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      alpha: random(50, 180),
      twinkleSpeed: random(0.01, 0.03),
      baseAlpha: random(50, 180),
    });
  }
  background(10, 10, 30);
}

function draw() {
  // Dark night sky with very subtle gradient
  setGradient(0, 0, width, height, color(10, 10, 30), color(5, 5, 15), 'Y');

  // Draw static twinkling stars in background
  for (let star of staticStars) {
    star.alpha = star.baseAlpha + sin(frameCount * star.twinkleSpeed) * 50;
    fill(255, 255, 255, star.alpha);
    circle(star.x, star.y, star.size);
  }

  // Add new sparkle on mouse move
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    trails.push({
      x: mouseX,
      y: mouseY,
      size: random(40, 70),
      alpha: 255,
      rotation: random(TWO_PI),
      glowAlpha: 120,
      color: color(
        random(200, 255),
        random(220, 255),
        255,
        255
      ),
    });
  }

  // Draw and update sparkles
  for (let i = trails.length - 1; i >= 0; i--) {
    let s = trails[i];
    push();
    translate(s.x, s.y);
    rotate(s.rotation + frameCount * 0.03); // Slight shimmer rotation

    // Glow effect: multiple layers with increasing size and decreasing alpha
    for (let glowSize = s.size * 1.5; glowSize > s.size; glowSize -= 5) {
      fill(red(s.color), green(s.color), blue(s.color), s.glowAlpha * ((glowSize - s.size) / (s.size * 0.5)));
      drawSixPointStar(0, 0, glowSize * 0.5);
    }

    // Main bright star
    fill(red(s.color), green(s.color), blue(s.color), s.alpha);
    drawSixPointStar(0, 0, s.size * 0.5);

    pop();

    // Update shimmer (fade and shrink glow)
    s.alpha -= 5;
    s.glowAlpha *= 0.95;
    s.size *= 0.96;

    if (s.alpha <= 0) {
      trails.splice(i, 1);
    }
  }
}

// Function to draw a 6-point star centered at (x, y), with radius r (distance to outer points)
function drawSixPointStar(x, y, r) {
  beginShape();
  for (let i = 0; i < 12; i++) {
    let angle = TWO_PI / 12 * i - HALF_PI;
    let radius = i % 2 === 0 ? r : r * 0.5;
    let sx = x + cos(angle) * radius;
    let sy = y + sin(angle) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Vertical gradient helper
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === 'Y') {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

