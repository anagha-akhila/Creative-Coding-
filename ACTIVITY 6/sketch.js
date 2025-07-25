var img;

function preload() {
  img = loadImage("pexels-karleykosmos-3131981.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0);
  
  var v = map(mouseX, 0, width, 2, 20);

  // Making the image scaled to fit the canvas
  image(img, 0, 0, 400, 400);
  
  filter(POSTERIZE, v);
}