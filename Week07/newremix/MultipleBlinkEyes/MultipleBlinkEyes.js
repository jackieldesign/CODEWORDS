//Using sound library!

let song; //initialise variable
let analyser;

function preload() { // good for larger files
  song = loadSound('data/CartoonBlink.mp3');
}

function setup() {
  //song = loadSound('data/CartoonBlink.mp3'); // associate sound to variable
  createCanvas (windowWidth, windowHeight);
  //background(0);
  analyser = new p5.Amplitude(); // declaring analyser as volume measure
  analyser.setInput(song); // analyser will read the input (song)
  textSize(72);
  stroke (255);
  font= 'Times';
  
}

function draw() {
  background(180,100,255);
  
  // EYE MIDDLE
  fill(255);
  noStroke();
  ellipse(width/2, height/2, 400, mouseY/3); // eye white
  
  fill(0);
  noStroke();
  ellipse(width/2, height/2, 200, mouseY/3); // iris
  
  // EYE BOTTOM RIGHT
  fill(255);
  noStroke();
  ellipse(width/4*3, height/4*3, 400, mouseY/3); // eye white
  
  fill(0);
  noStroke();
  ellipse(width/4*3, height/4*3, 200, mouseY/3); // iris
  
  // EYE TOP RIGHT
  fill(255);
  noStroke();
  ellipse(width/4*3, height/4, 400, mouseY/3); // eye white
  
  fill(0);
  noStroke();
  ellipse(width/4*3, height/4, 200, mouseY/3); // iris
  
  // EYE TOP LEFT
  fill(255);
  noStroke();
  ellipse(width/4, height/4, 400, mouseY/3); // eye white
  
  fill(0);
  noStroke();
  ellipse(width/4, height/4, 200, mouseY/3); // iris
  
  // EYE BOTTOM RIGHT
  fill(255);
  noStroke();
  ellipse(width/4, height/4*3, 400, mouseY/3); // eye white
  
  fill(0);
  noStroke();
  ellipse(width/4, height/4*3, 200, mouseY/3); // iris
  
  
  var volume = analyser.getLevel(); // calling analyser to get volume
  volume*= 500;
  fill(100,250,100);
  //translate (width/2,height/2);
  //rotate(volume);
  textSize(volume*3);
  textAlign(CENTER,CENTER);
  text('BLINK',width/2,height/2);
  textAlign(LEFT,CENTER);
  textSize(100);
  text(int(volume), 40,80);

}

function mousePressed() {
  if (song.isPlaying()) {
    background(255);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    background(0);
    song.loop();
    song.play();
  } // otherwise, play it
   
}

//class Eye {
//  constructor (x, y){
//    this.x = x;
//    this.y = y;
//  }
//  move () {
//    this.x = 
//  }
//}

//}
