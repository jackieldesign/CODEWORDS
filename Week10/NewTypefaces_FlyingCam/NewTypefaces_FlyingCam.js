// Original posenet code from Daniel Shiffman using ml5 Library
// Code by Jackie Liu

let sentence = 'Static, static, static! Be static! Movement is static! Movement is static! Movement is static';
let words = sentence.split(' ');
let sentence2 = 'because it is the only immutable thing—the only certainty, the only unchangeable.';
let words2 = sentence2.split(' ');
let paragraph = ' When the scarce commodity is not stuff, however, but the attention we bestow on it, then change is not the special case of stasis but vice versa., Stasis is the printout, the snapshot;, change is the underlying reality, the enduring code., , We cannot exist, after all, only by breathing out abstraction, alphabets which do not think; nor only by breathing in animation, alphabets which do; but only by respiration, the life-giving oscillation of the two., That oscillation is what’s next for text.';
let myText = paragraph.split(',');
let newObjects = [];
let tSize = 70;
let poseNet, pose, video, phrase,phrase2;
let wordcounter=0;
let wordcounter2 = 0;
let marginX = 40;
let camx = 0; 
let camy = 0; // x and y positions of video


function preload() {
  video = createCapture(VIDEO);
  font1 = loadFont('data/Redaction20-Regular.otf');
  font2 = loadFont('data/Redaction10-Italic.otf');
  font3 = loadFont('data/Union-Italic.otf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255,244,94);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses); // listen to new 'pose' events
  
}

function modelLoaded() {
  print('model loaded!');
}

function draw(){

  background(255,244,94);
  
  push();
  textAlign(LEFT);
  textSize(320);
  fill(0);
  textFont(font1);
  scale(1,1.5);
  text('OSCILLATE',(-80),220);
  pop();

  // flip video & posenet
  push(); 
  translate(video.width+width/2-(video.width/2), height/2-(video.height/2));
  scale (-1,1); 
  blendMode(MULTIPLY);
  image(video,camx-(video.width/2),camy-(video.height/2), 640, 480);  // -320 to center video & enforcing video size
  //filter(GRAY);
  pop();
  
  //paragraph with timed reveal, starts after 150 frames
  fill (255,244,94);
  textSize(16);
  textAlign(CENTER);
  textFont(font3);
  
  for (let i = 0; i < paragraph.length; i++){
    if ( frameCount > i*50+150) { 
      text (myText[i], int(width/4), (height/2)+i*20, int(width/2), height);
    }
  }
  
  for (let i = 0; i < newObjects.length; i++) {
    newObjects[i].move();
    newObjects[i].show();
  }
  
}

function gotPoses(poses) {
  console.log(poses);
    if (poses.length > 0) {
      pose = poses[0].pose; // if a pose is found, take first pose property from poses array (not skeleton)
      camx = map(pose.nose.x,300,700,200,width); // map video x position to pose X position
      camy = map(pose.nose.y,200,400,0,height-video.height); // map video y position to nose Y position
      phrase = words[wordcounter];
      phrase2 = words2[wordcounter2];
      if (pose.nose.x > video.width/2) { // When you go LEFT
        newObjects.push(new Sidewords(marginX,wordcounter*tSize+400,phrase,tSize,LEFT));
        if (wordcounter < words.length) {
          wordcounter += 1;
        } else {
          wordcounter = 0;
        }
      } else { // When you go RIGHT
        newObjects.push(new Sidewords(width-marginX,wordcounter2*tSize+400,phrase2,tSize,RIGHT));
        if (wordcounter2 < words.length) {
          wordcounter2 += 1;
        } else {
          wordcounter2 = 0;
        }
      }
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
