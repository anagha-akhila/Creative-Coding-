let mic;
let colors = [
  "#ffe6eb", 
  "#ffccd5", 
  "#ffb3c6", 
  "#ff99b8", 
  "#ff80aa" 
];

let trails = [];
let smoothedLevel = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);

  mic = new p5.AudioIn();
  mic.start();

  noStroke();
  ellipseMode(CENTER);
}

function draw() {
  fill(30, 30, 40, 40);
  rect(0, 0, width, height);

  let micLevelRaw = mic.getLevel();
  smoothedLevel = lerp(smoothedLevel, micLevelRaw, 0.1); 

  
  let micLevel = map(smoothedLevel, 0, 0.3, 10, 200);
  micLevel = constrain(micLevel, 10, 200);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    trails.push({
      x: mouseX,
      y: mouseY,
      size: micLevel,
      alpha: 255,
      color: color(random(colors))
    });
  }

  for (let i = trails.length - 1; i >= 0; i--) {
    let t = trails[i];

    for (let j = 10; j > 0; j--) {
      fill(
        red(t.color),
        green(t.color),
        blue(t.color),
        map(j, 10, 0, t.alpha * 0.15, 0)
      );
      ellipse(t.x, t.y, t.size + j * 10);
    }

    fill(red(t.color), green(t.color), blue(t.color), t.alpha);
    ellipse(t.x, t.y, t.size);

    t.alpha -= 6;
    t.size *= 0.96;

    if (t.alpha <= 0) {
      trails.splice(i, 1);
    }
  }
}
