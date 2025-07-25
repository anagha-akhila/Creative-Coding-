function setup() 
{
  createCanvas(400, 300);
   background(230, 230, 250);

  // car 
  fill(255, 182, 193); // pink
  rect(100, 150, 200, 50, 20);  
  rect(140, 120, 120, 40, 15); 

  // windows
  fill(255); 
  rect(150, 125, 40, 30, 8); 
  rect(210, 125, 40, 30, 8); 

  // wheels
  fill(50); 
  ellipse(130, 200, 40, 40); 
  ellipse(270, 200, 40, 40); 
  
 //inner wheel
  fill(200);
  ellipse(130, 200, 15, 15);
  ellipse(270, 200, 15, 15);

}
