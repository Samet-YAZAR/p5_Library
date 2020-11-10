

var circle1 = {
  x:0,
  y:200,
  diameter:50
};
var circle2 = {
  x:600,
  y:200,
  diameter:50
};



function setup() {
  createCanvas(600, 400);
}

function draw() {
  //map(mouseX,min1,max1,min2,max2)
  r = map(circle1.x,600,0,0,255);
  b = map(circle2.y+circle2.x,600,0,255,0);

  background(r,0,b);



  fill(200);
  ellipse(circle2.x,circle2.y,circle2.diameter);

  fill(0);
  ellipse(circle1.x,circle1.y,circle1.diameter);

  if(circle1.x !== width ) {

  circle1.x = circle1.x + 1;
  }
  if(circle2.x > 0) {
    circle2.x = circle2.x - 1;
  }

  if(circle2.diameter < (3 * circle1.diameter)) {
  circle2.diameter = circle2.diameter + 1;
  }

}
