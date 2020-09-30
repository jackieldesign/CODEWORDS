
let eyes = [];
let xPos, yPos, size;

function setup() {

  createCanvas (windowWidth, windowHeight);
  xPos = width/2;
  yPos = height/2;// eyes starting positions
  
}

function draw() {
  background(180,100,255);
 
 for (let i=0; i < eyes.length; i++){
   eyes[i].show();
   //eyes[i].move();
   eyes[i].bounce();
   eyes[i].move();
 }
}

function mousePressed() {
  eyes.push(new Eye (mouseX, mouseY, size, mouseY/5));
  size = random(50,200);
}

class Eye {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xspeed = random(-10,10);
    this.yspeed = random(-10,10);
  }
  
  show () {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h); // eyewhite
    fill(0);
    ellipse(this.x, this.y, this.w/2, this.h); // iris
  }
  move () {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  
  bounce () {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed *(-1);
    }
    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed *(-1);
    }
  }
}
