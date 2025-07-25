function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();
  frameRate(60);
}

function draw() {
  background(30, 20, 50, 30); 

  translate(width / 2, height / 2);

  
  for (let i = 5; i > 0; i--) {
    let glowSize = 300 + i * 40 + sin(frameCount * 2 + i * 20) * 20;
    fill(255, 200, 255, 20 - i * 2); 
    ellipse(0, 0, glowSize);
  }

  
  push();
  rotate(frameCount * 0.3); 
  fill(255, 77, 166, 230); 
  drawStar(0, 0, 25, 110, 6); 
  pop();

  
  for (let i = 0; i < 8; i++) {
    let angle = (360 / 8) * i + frameCount * 0.4;
    let radius = 200 + sin(frameCount + i * 15) * 15;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    push();
    translate(x, y);
    rotate(frameCount); 
    fill(255, 245, 255, 200);
    drawStar(0, 0, 5, 15, 6); 
    pop();
  }


  for (let i = 0; i < 30; i++) {
    let angle = random(360);
    let r = random(280);
    let x = cos(angle) * r;
    let y = sin(angle) * r;
    fill(255, 220, 255, random(40, 120));
    ellipse(x, y, random(1, 3));
  }
}


function drawStar(x, y, radius1, radius2, npoints) {
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
