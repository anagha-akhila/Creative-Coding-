let img;

function preload() {
  img = loadImage("pexels-diva-33145085.jpg");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); 
  noStroke();
  background(0);
}

function draw() {
  // Picking a random location
  let x = random(width);
  let y = random(height);

  // Get color at that pixel from the image
  let c = img.get(int(x), int(y));
  fill(c[0], c[1], c[2], 50); // Transparent fill

  // Draw rotating triangle
  push();
  translate(x, y);
  rotate(frameCount % 360); // Continuously rotate
  drawTriangle(0, 0, 20); // Draw centered triangle
  pop();
}

// Function to draw triangle centered at (x, y)
function drawTriangle(x, y, size) {
  beginShape();
  vertex(x, y - size);
  vertex(x - size, y + size);
  vertex(x + size, y + size);
  endShape(CLOSE);
}
