var hr, sc, mn

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);

  
}

function draw() {
  background(0,0,0);  
  translate(400,200);
 
 
  

 

hr = hour();
mn = minute();
sc = second();

scAngle = map(sc, 0, 60, 0, 360);

mnAngle = map(mn, 0, 60, 0, 360);

hrAngle = map(hr %12, 0, 60, 0, 360);



push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,80,0);
noFill();
arc(0 , 0, 160, 160, 0, mnAngle);
pop();

push();
rotate(mnAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,100,0);
noFill();
arc(0 , 0, 200, 200, 0, mnAngle);
pop();

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,120,0);
noFill();
arc(0 , 0, 240, 240, 0, scAngle);
pop();





  drawSprites();
}