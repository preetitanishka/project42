 var  hr,mn,sc,hrAngle,scAngle,mnAngle;

function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();
 hr = hour();
 mn = minute();
 sc = second();
  scAngle = Map(sc,0,60,0,360);
  Push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  Pop();
  
}
