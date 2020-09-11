//working with midform text
var myText= ("Perhaps the greatest faculty our minds possess is the ability to cope with pain. Classic thinking teaches us of the four doors of the mind, which everyone moves through according to their need. First is the door of sleep. Sleep offers us a retreat from the world and all its pain. Sleep marks passing time, giving us distance from the things that have hurt us. When a person is wounded they will often fall unconscious. Similarly, someone who hears traumatic news will often swoon or faint. This is the mind's way of protecting itself from pain by stepping through the first door. Second is the door of forgetting. Some wounds are too deep to heal, or too deep to heal quickly. In addition, many memories are simply painful, and there is no healing to be done. The saying 'time heals all wounds' is false. Time heals most wounds. The rest are hidden behind this door. Third is the door of madness. There are times when the mind is dealt such a blow it hides itself in insanity. While this may not seem beneficial, it is. There are times when reality is nothing but pain, and to escape that pain the mind must leave reality behind. Last is the door of death. The final resort. Nothing can hurt us after we are dead, or so we have been told.");

function setup() {
  createCanvas (windowWidth, windowHeight);
  background (185,130,56);
  textSize (24);
  textFont("Arial");
  textAlign(CENTER);
  noStroke();
  //frameRate(10);

}


function draw() {
  background (185,130,56);
  fill(255);
  textSize (24);
  textLeading(sin(frameCount*0.01)*100);
  //textLeading(mouseY/5);
  text (myText, int (windowWidth/8), windowHeight/8, int (windowWidth/4*3), windowHeight); 
  //(myText, int(windowWidth/8), windowHeight/8, int(windowWidth/4*3), windowHeight);
  // text(s,x,y,x,y) string, box top left corner, bottom right corner
  textSize(50);
text("The Name of the Wind by Patrick Rothfuss", 480, 50); //title

 
}
