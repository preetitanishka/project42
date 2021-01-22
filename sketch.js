 hr = hour();
 mn = minute();
 sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  angleMode(degrees);
  scAngle = Map(sc,0,60,0,360);
  Push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  Pop();
  
}