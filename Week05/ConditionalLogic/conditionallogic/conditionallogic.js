//learning conditional logic with Dan Shiffman — BOUNCING ELLIPSE

// circle variable
var c = {
  x: 800,
  y: 50,
  d: 100,
}; 

let speed = 5;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0,10);//alpha argument to make faded stroke trail
  
  if (mouseY > height/2) {
    fill(80,255,170);
  }
  
  else {
  fill(255);
  } // if/else condition for text colour

textSize(120);
noStroke();
textFont("Arial Narrow");
text("Conditional Logic",100,300);

  stroke(255);
  strokeWeight(3);
  fill(80,255,170);
  ellipse(c.x,c.y,300,c.d);
  
  //if (c.y > height) {
   // speed = -3;
  //} 
  // if y position of circle is off screen, speed variable changes to -3. ONE BOUNCE
  
  
  if (c.y > height-50 || c.y < 50) {
  speed = speed * -1;
  }
  //if y position of circle is off screen OR on screen, speed is multiplied by -1 to reverse/BOUNCE))
  
  
  if (mouseX > width/4*3) {
    fill(255);
    rect(width/4*3,height/2,100,100); // start with the greatest value.
  }
  
   else if (mouseX > width/2) {
    fill(255);
    rect(width/2,height/2,100,100);
  }
  
    else if (mouseX > width/4) {
    fill(255);
    rect(width/4,height/2,100,100);
  } // rects appearing according to mouseX position
  //else if used to make squares appear one by one.
  
  c.y = c.y + speed; //incrementing y position of circle by speed (3)

}
