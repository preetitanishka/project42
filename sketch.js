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
  mnAngle = Map(mn,0,60,0,360);
  hrAngle = Map(hr%12,0,12,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}
