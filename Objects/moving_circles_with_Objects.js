
var r =218;
var g= 200;
var b =  100;

var circle1 = {
  x:0,
  y:200,
  diameter:50
};
var circle2 = {
  x:0,
  y:200,
  diameter:50
};



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r,g,b);

  fill(200);
  ellipse(circle2.x,circle2.y,circle2.diameter);

  fill(0);
  ellipse(circle1.x,circle1.y,circle1.diameter);


  circle2.x = circle2.x + 1;
  circle2.diameter = circle2.diameter + 1;

  circle1.x = circle1.x + 1;

}
