const letters= 'abcdefghijklmnopqrstuvwxyz'; // would also work as var
//^variable for letters for the array of options
var rand, listLength;

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(255);
  textSize(24);
  noStroke();
  textFont("Arial");
  //frameRate(5);
  listLength=letters.length; //initialising listLength value = length of the letters variable
  
}


function draw() {
  
  rand = int(random(0,listLength)); // initialising rand. -1 because counting starts at 0
  fill(0);
  textSize(random(5,50)); // random (smallest size, biggest size)
  text(letters[rand],random(width), random(height));// substance of text, X position, Y position)
  fill(255);
  ellipse(mouseX,mouseY,150,150);
 
  
}
