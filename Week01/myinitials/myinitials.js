//jackie liu!
function setup() {
createCanvas (500,500);
background (250,175,64);
stroke (38,34,97);
strokeWeight(2);
line (0,0,0,500);
line (50,0,50,500);
line (100,0,100,500);
line (150,0,150,500);
line (200,0,200,500);
line (250,0,250,500);
line (300,0,300,500);
line (350,0,350,500);
line (400,0,400,500);
line (450,0,450,500);
line (500,0,500,500); // vertical lines

line (0,0,500,0);
line (0,50,500,50);
line (0,100,500,100);
line (0,150,500,150);
line (0,200,500,200);
line (0,250,500,250);
line (0,300,500,300);
line (0,350,500,350);
line (0,400,500,400);
line (0,450,500,450);
line (0,500,500,500); // Horizontal

}


function draw() {
fill (103,110,52);
arc(150, 100, 200, 100, PI, TWO_PI);
fill (238,61,36);
triangle(40, 320, 80, 220, 200, 400);
fill (238,61,36);
arc(400, 400, 150, 100, PI, TWO_PI);
fill (103,110,52);
ellipse (300,250,60,mouseY); // (centerX,centerY,W,H)
fill (255,90,216);
ellipse (200,250,60,mouseX); // (centerX,centerY,W,H)


}
