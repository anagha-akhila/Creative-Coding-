let quote = "eventide";
let font;
let points = [];
let fontSize = 100;
let bgStars = [];

function preload() {
  font = loadFont(
    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf"
  );
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(fontSize);

  // Convert the quote into points
  let bounds = font.textBounds(quote, 0, 0, fontSize);
  let x = (width - bounds.w) / 2;
  let y = (height + bounds.h) / 2;
  points = font.textToPoints(quote, x, y, fontSize, {
    sampleFactor: 0.25,
    simplifyThreshold: 0,
  });

  // Sunset sparkles
  for (let i = 0; i < 120; i++) {
    bgStars.push({
      x: random(width),
      y: random(height),
      size: random(6, 12),
      speed: random(0.2, 0.6),
      color: color(random(255, 255), random(150, 190), random(200, 255), 120),
    });
  }

  noStroke();
}

function draw() {
  // Pink Sunset Gradient
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(
      color(255, 180, 200), // soft pink
      color(255, 220, 190), // peach
      inter
    );
    stroke(c);
    line(0, i, width, i);
  }
  noStroke();

  // Soft falling diamond sparkles
  for (let star of bgStars) {
    fill(star.color);
    push();
    translate(star.x, star.y);
    rotate(frameCount * 0.2);
    beginShape();
    vertex(0, -star.size / 2);
    vertex(star.size / 2, 0);
    vertex(0, star.size / 2);
    vertex(-star.size / 2, 0);
    endShape(CLOSE);
    pop();

    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
  }

  // "FOCUS" animated with petal-like shapes
  let mouseInfluence = map(mouseX, 0, width, 0.01, 0.2);
  let motionScale = map(mouseY, 0, height, 2, 8);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let angle = frameCount * mouseInfluence + i * 0.1;
    let offsetX = sin(angle) * motionScale;
    let offsetY = cos(angle) * motionScale;
    let size = map(sin(angle), -1, 1, 3, 7);

    // Soft pastel sunset colors
    let sunsetColor = lerpColor(
      color(255, 140, 170),
      color(255, 210, 180),
      (sin(angle) + 1) / 2
    );

    fill(sunsetColor);
    push();
    translate(p.x + offsetX, p.y + offsetY);
    rotate(angle * 3);
    // Petal shape
    beginShape();
    vertex(0, -size);
    bezierVertex(size, -size, size, size, 0, size);
    bezierVertex(-size, size, -size, -size, 0, -size);
    endShape(CLOSE);
    pop();
  }
}
