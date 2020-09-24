// Original code by Daniel Shiffman
// iterated by Jackie

let video;
let poseNet;
let pose;
//console.log('ml5 version:', ml5.version);

function setup(){
  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
   pose = poses[0].pose; // if pose is found, take first pose property from poses array (not skeleton)
  }
}

function modelLoaded() {
  print('poseNet ready');
}

function draw(){
  
  image(video,0,0);  
  
  if (pose) {
    noStroke();
    ellipse(pose.nose.x, pose.nose.y, 100);
    fill(200,250,0);
  }  
  
  if ( mouseX > 320) { // will be tracking pose.nose.x instead of mouseX!! doesn't work at the moment
    rect(40,40,60,60);
  }
  
}
