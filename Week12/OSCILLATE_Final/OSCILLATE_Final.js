// Hello! Welcome to my code world
// Original posenet code from Daniel Shiffman using ml5 Library
// Code by Jackie Liu
// Sidewords class written in a separate tab.

// Left side sentence
let sentence = 'Static, static, static! Be static! Movement is static! Movement is static! Movement is static! Static, static, static! Be static! Movement is static!';
let words = sentence.split(' ');
let wordcounter = 0;

// Right side sentence
let sentence2 = 'because it is the only immutable thing—the only certainty, the only unchangeable. because it is the only immutable thing—the only certainty, the only unchangeable.';
let words2 = sentence2.split(' ');
let wordcounter2 = 0;

// Center paragraph
let paragraph = ' When the scarce commodity is not stuff, however, but the attention we bestow on it, then change is not the special case of stasis but vice versa., Stasis is the printout, the snapshot;, change is the underlying reality, the enduring code., , We cannot exist, after all, only by breathing out abstraction, alphabets which do not think; nor only by breathing in animation, alphabets which do; but only by respiration, the life-giving oscillation of the two., That oscillation is what’s next for text.';
let myText = paragraph.split(','); // paragraph is split by commas, to reveal line by line.

let newObjects = []; // array to push Sidewords class (in 'Sidewords' tab)
 // text size of sidewords.
let poseNet, pose, video, phrase, phrase2;
let videosize, titlesize, titleY, tSize; // responsive text variables
let marginX = 40;
let camx = 0;
let camy = 0; // x and y positions of video
p5.disableFriendlyErrors = true;


function preload() {
  video = createCapture(VIDEO);
  font1 = loadFont('data/Redaction20-Regular.otf');
  font2 = loadFont('data/Redaction10-Italic.otf');
  font3 = loadFont('data/Union-Italic.otf');
}

function setup(){
  createCanvas(windowWidth,windowHeight+300); // Can scroll to read words.
  colorMode(HSB,100);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses); // listen to new 'pose' events
  

}

function modelLoaded() {
  print('model loaded!');
}

function draw(){
  background(16,60,100);

  // Flip video & posenet
  push(); 
  translate(video.width/2+width/2, height/2-(video.height/2));
  scale (-1,1); 
  blendMode(MULTIPLY);
  image(video,camx-(video.width/2),camy-(video.height/2), videosize, videosize/4*3);  // drawing video to the screen. Enforcing video dimensions of 640,480
  videosize = map(width, 0,1800,200,640); // making video responsive to width
  pop(); // do not flip anything else
  
  // Title
  push();
  textAlign(LEFT);
  textSize(titlesize);
  titlesize = map(width,0,1800,0,320); // making title size responsive to width
  fill(0);
  textFont(font1);
  scale(1,1.5); // Stretch text vertically
  text('OSCILLATE',0,titleY);
  titleY = map(width,0,1800,0,220);
  pop(); // do not stretch anything else
  
  //Paragraph with timed line by line reveal, starts after 150 frames
  fill (16,60,100);
  textSize(16);
  textAlign(CENTER);
  textFont(font3);
  
  for (let i = 0; i < paragraph.length; i++){
    if ( frameCount > i*20+100) { 
      text (myText[i], int(width/4), (height/3)+i*20, int(width/2), height);
    }
  }
  
  for (let i = 0; i < newObjects.length; i++) {
    newObjects[i].move();
    newObjects[i].show(); // calling class functions.
  }
  
}

function gotPoses(poses) {
  console.log(poses); // write all poses in console log
    if (poses.length > 0) { // if a pose is found
      pose = poses[0].pose; // take first pose property from poses array (not skeleton)
      camx = map(pose.nose.x,video.width/16,video.width,(-video.width),width); // map video x position to pose x position
      camy = map(pose.nose.y,video.height/2.4,video.height,0,height); // map video y position to nose y position
      tSize = map(width,0,1800,12,50);
      // making words appear when you go left and right
      phrase = words[wordcounter];
      phrase2 = words2[wordcounter2];
      if (pose.nose.x > video.width/2) { // If you go LEFT
        newObjects.push(new Sidewords(marginX,(wordcounter*tSize)+(titleY*2),phrase,tSize,LEFT)); 
        if (wordcounter < words.length) {
          wordcounter += 1; // move up 1 in the 'words' array
        } else {
          wordcounter = 0; // When the array is finished, return to beginning of array.
        }
      } else { // If you go RIGHT
        newObjects.push(new Sidewords(width-marginX,(wordcounter2*tSize)+(titleY*2),phrase2,tSize,RIGHT));
        if (wordcounter2 < words2.length) { 
          wordcounter2 += 1; // move up 1 in the 'words2' array
        } else {
          wordcounter2 = 0; 
        }
      }
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Canvas size changes when window resized.
  
}
