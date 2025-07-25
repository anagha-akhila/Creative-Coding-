function setup() {
  createCanvas(400, 400);
   background(255, 182, 193)

  // main head
  fill(200, 170, 255); 
  noStroke();
  ellipse(width / 2, height / 2, 200, 200);

  // ears
  fill(150, 120, 200); 
  ellipse(width / 2 - 110, height / 2, 40, 40);
  ellipse(width / 2 + 110, height / 2, 40, 40);
  fill(90, 50, 120);
  ellipse(width / 2 - 110, height / 2, 20, 20);
  ellipse(width / 2 + 110, height / 2, 20, 20);

  // antennas
  fill(200, 170, 255); 
  push();
  translate(width / 2 - 70, height / 2 - 80);
  rotate(radians(-45));
  ellipse(0, 0, 30, 100);
  pop();

  push();
  translate(width / 2 + 70, height / 2 - 80);
  rotate(radians(45));
  ellipse(0, 0, 30, 100);
  pop();

  // eye
  fill(255);
  ellipse(width / 2, height / 2 - 20, 100, 100); 

  fill(0);
  ellipse(width / 2, height / 2 - 20, 60, 60); 

  fill(255);
  ellipse(width / 2 + 15, height / 2 - 30, 20, 20); 

  // mouth
  fill(90, 50, 120);
  ellipse(width / 2, height / 2 + 50, 50, 15);
}
