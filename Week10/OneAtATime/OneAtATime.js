// Posenet code from Daniel Shiffman

let sentence = 'it is the only immutable thing—the only certainty, the only unchangeable.';
let words = sentence.split(' '); // my array
let poseNet, pose, video;
let newObjects = [];
let diam = 50;

function preload() {
  video = createCapture(VIDEO);
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  //frameRate(2);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses); // listen to new 'pose' events
  
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
   pose = poses[0].pose; // if a pose is found, take first pose property from poses array (not skeleton)
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

  push();
  translate(video.width+width/2-(video.width/2), height/2-(video.height/2)); 
  scale (-1,1); // flip video & posenet
  image(video, 0, 0, 640, 480);  //enforcing video size
  pop(); // do not flip anything else
  
  for (let i = 0; i < newObjects.length; i++) {
    newObjects[i].move();
    newObjects[i].show();
  }
       
  if (pose) { // must always detect a pose before a pose property!
  
    if (pose.nose.x > video.width/2) { // When you go LEFT
      for (i = 0; i < words.length; i++) {
        newObjects.push(new Sidewords(random(0,500),random(0,height),words[i],diam));
//         noLoop();
      }
    }
    if (pose.nose.x < video.width/2) { // When you go RIGHT
      for (i = 0; i < words.length; i++) {
        newObjects.push(new Sidewords(random(width-500,width),random(0,height),words[i],diam));
//         noLoop();
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
