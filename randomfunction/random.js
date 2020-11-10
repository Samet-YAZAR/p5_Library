var spot = {
  x : 200,
  y : 100
}

var col = {
  r :255,
  g :0,
  b : 0
}

function setup() {
  createCanvas(600,400); 
    background(0);
}

function draw () {


  this.spot.x = random(0, width);
  this.spot.y = random(0,height);
  fill(col.r,col.g,col.b);
  ellipse(spot.x,spot.y,50,50);

}
