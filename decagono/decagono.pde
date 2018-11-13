int contador = 0;
float primeirox, primeiroy, segundox, segundoy, terceirox, terceiroy, quartox, quartoy;
void polygon(float x, float y, float radius, int npoints) {
  float angle = TWO_PI / npoints;

  noFill();
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius;
    float sy = y + sin(a) * radius;
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

void setup() {
  size(1024, 768);
}

void draw() {

  polygon(500, 500, 200, 10);
}
