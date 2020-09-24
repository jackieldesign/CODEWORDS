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
  
  background(220);
  translate(video.width, 0);
  scale (-1,1);
  image(video,0,0);  
  
  if (pose) {
    noStroke();
    ellipse(pose.rightEye.x, pose.rightEye.y, 80);
    ellipse(pose.leftEye.x,pose.leftEye.y, 80);
    fill(200,250,0);
  }  
  
  if (mouseX > 320) { // will be tracking pose.nose.x instead of mouseX!! doesn't work at the moment
    textSize(70);
    text('Hello',40,100);
  
  }

}
