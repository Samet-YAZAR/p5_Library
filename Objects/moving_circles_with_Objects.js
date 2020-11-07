var r =218;
var g= 200;
var b =  100;

var circlee = {
  x:0,
  y:200,
  diameter:50
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r,g,b);

  fill(250);
  ellipse(circlee.x,circlee.y,circlee.diameter);
  circlee.x = circlee.x + 1;

}
