// Posenet code from Daniel Shiffman

let sentence = 'Static, static, static! Be static! Movement is static! Movement is static! Movement is static because it is the only immutable thing- the only certainty, the only unchangeable';
let words = sentence.split(' ');
let sentence2 = 'because it is the only immutable thing—the only certainty, the only unchangeable.';
let words2 = sentence2.split(' ');
let paragraph = ' When the scarce commodity is not stuff, however, but the attention we bestow on it, then change is not the special case of stasis but vice versa., Stasis is the printout, the snapshot;, change is the underlying reality, the enduring code., , We cannot exist, after all, only by breathing out abstraction, alphabets which do not think; nor only by breathing in animation, alphabets which do; but only by respiration, the life-giving oscillation of the two., That oscillation is what’s next for text.';
let myText = paragraph.split(',');
let video;
let poseNet;
let pose;
let camx = 0; 
let camy = 0; // x and y positions of video


function preload() {
  video = createCapture(VIDEO);
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses); // listen to new 'pose' events
  
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
   pose = poses[0].pose; // if pose is found, take first pose property from poses array (not skeleton)
  }
}

function modelLoaded() {
  print('model loaded!');
}

function draw(){
  background(220);
  textAlign(CENTER);
  textSize(320);
  fill(255);
  text('OSCILLATE',width/2,230);

  push();
  translate(video.width+width/2-(video.width/2), height/2-(video.height/2));
  scale (-1,1); // flip video & posenet
  image(video,camx-(video.width/2),camy);  // -320 to centre video
  
  if (pose) {
    camx = map(pose.nose.x,300,700,200,width); // map video x position to pose X position
    camy = map(pose.nose.y,200,400,0,height-400); // map video y position to nose Y position
  }
  
  // yellow eye circles
  //if (pose) {
  //  noStroke();
  //  fill(200,250,0);
  //  ellipse(pose.rightEye.x, pose.rightEye.y, 80);
  //  ellipse(pose.leftEye.x,pose.leftEye.y, 80);
  //}  
  
  pop(); // do not flip anything else
  
  
  for ( let i = 0; i < words.length; i++) {
  
    if (pose) {
      
      if (pose.nose.x > 320) {
        
        if (pose.nose.x > i*60){
          fill(0,0,255);
          textAlign(LEFT);
          textSize(70);
          text(words[i],40+random(-5,5),i*70+100); 
        }
        
       } else {
         
         if (pose.nose.x < i*60){
           fill(0,0,255);
           textAlign(RIGHT);
           textSize(70);
           text(words2[i],(width-40)+random(-5,5),i*70+100);
         }

       }
    }

  }
  
  //paragraph with timed reveal, starts after 200 frames
  fill (0,0,255);
  textSize(16);
  textAlign(CENTER);
  
  for (let i = 0; i < paragraph.length; i++){
      if ( frameCount > i*50+200) { 
        text (myText[i], int (width/4), (height/3)+i*20, int (width/2), height);
      } 
  }
}
