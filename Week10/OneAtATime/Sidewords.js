class Sidewords {
  constructor (x,y,phrase,size) {
    this.x = x;
    this.y = y;
    this.diam = diam;
    this.speed = 5;
    this.text = phrase;
    this.textSize = size;
  }
  move () {
    this.x += random(-this.speed, this.speed);
  }
  show () {
    //ellipse (this.x, this.y, this.diam, this.diam);
    fill(0);
    textSize(this.textSize);
    text(this.text, this.x, this.y);
  }
}
