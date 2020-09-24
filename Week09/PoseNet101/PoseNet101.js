// Original code by Daniel Shiffman
// iterated by Jackie

let video;
let poseNet;
let pose;
//console.log('ml5 version:', ml5.version);

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
  
  push();
  background(220);
  translate(video.width, 0);
  scale (-1,1);
  image(video,0,0);  
  
  if (pose) {
    noStroke();
    fill(200,250,0);
    ellipse(pose.rightEye.x, pose.rightEye.y, 80);
    ellipse(pose.leftEye.x,pose.leftEye.y, 80);
  }  
  pop();
  
  push();
  if (pose) {
   if (pose.nose.x > 320) { 
     fill(0,0,255);
     textSize(70);
     text('Hello',40,100);
   } else {
     fill(0,0,255);
     textSize(70);
     text('Goodbye',350,100);
   }
  }
  pop();
}
