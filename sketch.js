let x, y;
let xSpeed, ySpeed;
let ballSize = 40;
let ballColor;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('canvas-container');

  // Start the ball in the center
  x = width / 2;
  y = height / 2;

  // Random initial speed
  xSpeed = random(3, 6);
  ySpeed = random(3, 6);

  ballColor = color(255, 100, 150);
}

function draw() {
  background(30, 30, 60);

  // Update position
  x += xSpeed;
  y += ySpeed;

  // Bounce off walls
  if (x + ballSize / 2 >= width || x - ballSize / 2 <= 0) {
    xSpeed *= -1;
    ballColor = color(random(100, 255), random(100, 255), random(100, 255));
  }

  if (y + ballSize / 2 >= height || y - ballSize / 2 <= 0) {
    ySpeed *= -1;
    ballColor = color(random(100, 255), random(100, 255), random(100, 255));
  }

  // Draw the ball
  noStroke();
  fill(ballColor);
  ellipse(x, y, ballSize, ballSize);
}

