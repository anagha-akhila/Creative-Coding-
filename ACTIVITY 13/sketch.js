let mic;
let dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // 3D effect
  noStroke();

  // Microphone setup
  mic = new p5.AudioIn();
  mic.start();

  // Create glowing dots floating in "infinite" space
  for (let i = 0; i < 500; i++) {
    dots.push({
      x: random(-1000, 1000),
      y: random(-600, 600),
      z: random(-1200, 1200),
      size: random(5, 20),
      baseSize: random(5, 20),
      col: color(random(200, 255), random(150, 255), random(200, 255), 255)
    });
  }
}

function draw() {
  background(10, 10, 20);

  // Slight camera movement with mouse for immersive effect
  rotateY(map(mouseX, 0, width, -0.3, 0.3));
  rotateX(map(mouseY, 0, height, -0.2, 0.2));

  let micLevel = mic.getLevel();

  // Draw glowing dots
  for (let d of dots) {
    push();
    translate(d.x, d.y, d.z);

    // Pulsing with audio
    let pulse = map(micLevel, 0, 0.3, 0.5, 3);
    let currentSize = d.baseSize + sin(frameCount * 0.05) * pulse;

    // Glow effect (outer aura)
    for (let g = 3; g > 0; g--) {
      fill(red(d.col), green(d.col), blue(d.col), 40 / g);
      ellipse(0, 0, currentSize + g * 15);
    }

    fill(d.col);
    ellipse(0, 0, currentSize);
    pop();
  }
}