class Sidewords {
  constructor (x,y,phrase,size,align) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.text = phrase;
    this.textSize = size;
    this.align = align;
  }
  move () {
    this.x += random(-this.speed, this.speed);
  }
  show () {
    fill (0);
    textAlign(this.align);
    textFont(font2);
    textSize(this.textSize);
    text(this.text, this.x, this.y);
  }
}
