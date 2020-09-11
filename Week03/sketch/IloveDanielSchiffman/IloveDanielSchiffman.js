var circleX = 350;

function setup() {
createCanvas (800,800);
background(100,100,30);
}


function draw() {
  noStroke();
  fill(185,130,56);
  ellipse(circleX,180,240,240);
  rect(0,500,800,800);
  strokeWeight(2);
  stroke(255);
  line(100,100,200,500);
  line(400,200,pmouseX,pmouseY);
  

  
  
  
}

function mousePressed(){
  background(50);
}

function keyPressed(){
  background(100,0,0);
}
