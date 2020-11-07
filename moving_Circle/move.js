var circleX=200;
var circleY= 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250,250,100);
  fill(250,0,200,50);
  ellipse(circleX,200,25,25);
  circleX = circleX + 1;

  ellipse(200,circleY,25,25);
  circleY = circleY + 1;

}
