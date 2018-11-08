function preload(){

  
}

function setup() {
  // put setup code here
  createCanvas(1000, 600);
  background('#22252b');
}

function draw() {
  // put drawing code here
    fill(0);
    polygon(700, 300, 250, 10);

}

var contador = 0;
var primeirox, primeiroy, segundox, segundoy, terceirox, terceiroy, quartox, quartoy;

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;

  noFill();
  stroke('#e8e8eb');
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
    line(x, y, sx, sy);
    contador++;
    ellipse(x, y-radius, 30, 30);
    ellipse(x, y+radius, 30, 30);
    ellipse(x-(radius/2), y, 30, 30);
    switch(contador) {
    case 0: 
      break;
    case 1: 
      break;
    case 2:
      primeirox=sx;
      primeiroy=sy;
      ellipse(primeirox, primeiroy, 30, 30);
      break;
    case 3: 
      break;
    case 4: 
      break;
    case 5:
      segundox=sx;
      segundoy=sy;
      ellipse(segundox, segundoy, 30, 30);
      break;
    case 6: 
      break;
    case 7:
      terceirox=sx;
      terceiroy=sy;
      ellipse(terceirox, terceiroy, 30, 30);
      break;
    case 8:
      break;
    case 9: 
      break;
    case 10:
      quartox=sx;
      quartoy=sy;
      ellipse(quartox, quartoy, 30, 30);
      break;
    case 11:
      break;
    }
  }
  endShape(CLOSE);
}