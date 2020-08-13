function preload() {
  //Ensure  the .ttf or .otf font stored in directory
  //s loaded before setup and draw
  font=loadFont('data/ManifontGroteskBook-webfont.otf');
  font2=loadFont('data/AileronRegular.ttf');
  font3=loadFont('data/GTSectraBookItalic.ttf');
  //can't have font names with spaces in it
}

function setup() {
  createCanvas(600,600);
  background (0,0,200);
  fill(255);
  textFont (font,72);
  textAlign(CENTER);
}


function draw() {
  textFont(font2,72);
  text('hello world',300,280);
  textFont(font3,20);
  text('SMALL HELLO WORLD',300,100);
  textFont(font,120);
  text('big hello',300,480);
}

function mousePressed() {

}
