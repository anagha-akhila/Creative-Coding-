let data = [
  { movie: "Avatar", gross: 2847.2 },
  { movie: "Avengers: Endgame", gross: 2797.8 },
  { movie: "Titanic", gross: 2201.6 },
  { movie: "Star Wars: The Force Awakens", gross: 2068.2 },
  { movie: "Avengers: Infinity War", gross: 2048.4 }
];

let colors = [
  "#3b83bd", // Blue
  "#d94f4f", // Red
  "#f2b134", // Yellow/Gold
  "#6ab04c", // Green
  "#8e44ad"  // Purple
];

function setup() {
  createCanvas(700, 500);
  textFont('Helvetica, Arial, sans-serif');
  textAlign(CENTER, CENTER);
  textSize(14);
  noLoop();
}

function draw() {
  background(255);  // White background

  let marginX = 80;
  let marginTop = 80;
  let marginBottom = 100;
  let chartHeight = height - marginTop - marginBottom;
  let barWidth = (width - 2 * marginX) / data.length;
  let maxGross = max(data.map(d => d.gross));

  // Title
  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text("Top 5 Highest Grossing Movies of All Time (in $M)", width / 2, marginTop / 5);

  textSize(14);
  for (let i = 0; i < data.length; i++) {
    let x = marginX + i * barWidth;
    let h = map(data[i].gross, 0, maxGross, 0, chartHeight);

    // Bar fill color from palette
    fill(colors[i]);
    rect(x + barWidth * 0.15, height - marginBottom - h, barWidth * 0.7, h, 10);

    // Gross value above bar with commas and $M
    fill(0);
    noStroke();
    text(`$${data[i].gross.toLocaleString()}M`, x + barWidth * 0.5, height - marginBottom - h - 20);

    // Movie title below bar (wrap if long)
    textAlign(CENTER, TOP);
    text(data[i].movie, x + barWidth * 0.3, height - marginBottom + 8, barWidth * 0.5);
  }

  // X-axis line
  stroke(150);
  strokeWeight(1);
  line(marginX, height - marginBottom, width - marginX, height - marginBottom);

  noStroke();
}
