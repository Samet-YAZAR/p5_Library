function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // IF needed here is functions to keep the shapes in the center.
  // ellipseMode(CENTER);
  // rectMode(CENTER);
  // triangle(CENTER);
  // line(CENTER);


  fill(100,50,0);
  rect(100,200,80 ,50);

  fill(255,165,0);
  ellipse(150,200,50,50);

  fill(255,255,51);
  triangle(80, 265, 108, 210, 136, 265);

  fill(0,150,150);
  square(150, 150, 50);

  fill(0,150,150);
  quad(150, 240, 186, 220, 169, 263, 130, 266);

  fill(255,0,0);
  line(200,100,100,200);
}
