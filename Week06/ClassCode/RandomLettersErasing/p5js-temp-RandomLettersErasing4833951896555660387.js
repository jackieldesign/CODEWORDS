const letters= 'abcdefghijklmnopqrstuvwxyz'; // would also work as var
//^variable for letters for the array of options
var rand, listLength;

var spot = {
  x: 100,
  y: 50,
  diameter: 30,
  
};
  

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(255);
  textSize(24);
  noStroke();
  textFont("Arial");
  frameRate(10);
  listLength=letters.length; //initialising listLength value = length of the letters variable
  
}


function draw() {
  
  rand = int(random(0,listLength)); // initialising rand. -1 because counting starts at 0
  fill(0);
  textSize(random(5,50)); // random (smallest size, biggest size)
  text(letters[rand],random(width), random(height));// substance of text, X position, Y position)
  spot.x=random(0,width);
  spot.y=random(0,height);
  fill(random(100,255));
  ellipse(spot.x,spot.y,spot.diameter,spot.diameter);
  
  //eraser
  fill(255);
  ellipse(mouseX,mouseY,150,150);
 
  
}

function mousePressed() {
  fill(0);
}
