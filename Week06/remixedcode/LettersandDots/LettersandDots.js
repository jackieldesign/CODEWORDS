const letters= 'SLEEP'; // would also work as var
//^variable for letters for the array of options
var rand, listLength;

var spot = {
  x: 100,
  y: 50,
  diameter: 60,
  
};
  

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(0);
  textSize(24);
  noStroke();
  textFont("Arial");
  frameRate(15);
  listLength=letters.length; //initialising listLength value = length of the letters variable
  
}


function draw() {
  
  rand = int(random(0,listLength)); // initialising rand. -1 because counting starts at 0
  fill(255);
  textSize(random(20,72)); // random (smallest size, biggest size)
  text(letters[rand],random(width), random(height));// substance of text, X position, Y position)
  spot.x=random(0,width);
  spot.y=random(0,height);
  fill(random(100,255));
  ellipse(spot.x,spot.y,spot.diameter,spot.diameter);
  
  //eraser
  fill(0,0,200);
  rect(mouseX-10,mouseY-10,20,20);
 
  
}

function mousePressed() {
  background(0);
}
