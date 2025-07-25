let img, x, y;

function preload() {
  img = loadImage("pexels-shvetsa-4014919.jpg"); 
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  image(img, 0, 0, 400, 400); 

  x = mouseX;
  y = mouseY;

  let c = get(x, y); 
  fill(c);

  drawHeart(x, y, 20); 
}

// heart shaped cursor
function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
