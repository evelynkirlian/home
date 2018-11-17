var doisx, doisy, tresy, dezx, dezy, quatrox, cincox, cincoy, seisx, seisy, setex, setey, oitoy, pa, pb;

var movs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background('#22252b');

  logofunction(windowWidth/2, 200, 200, 150, 150, 150);

  var i;
  for(i=0;i<9;i++){
    //movs[i] = new Mover(200*i, 50*i);
    switch (i){
      case 0:
        movs[i] = new Mover (doisx, doisy);
        movs[i].target = createVector(pa,pb);
        break;
      case 1:
        movs[i] = new Mover (dezx, dezy);
        movs[i].target = createVector(pa,pb);
        break;      
      case 2:
        movs[i] = new Mover (cincox, cincoy);
        movs[i].target = createVector(pa,cincoy);
        break;
      case 3:
        movs[i] = new Mover (setex, setey);
        movs[i].target = createVector(pa,setey);
        break;
      case 4:
        movs[i] = new Mover (cincox, cincoy);
        movs[i].target = createVector(setex,pb);
        break;
      case 5:
        movs[i] = new Mover (seisx, seisy);
        movs[i].target = createVector(quatrox,seisy);
        break;
      case 6:
        movs[i] = new Mover(pa, oitoy);
        movs[i].target = createVector(pa, pb);
        break;
      case 7:
        movs[i] = new Mover(pa, tresy);
        movs[i].target = createVector(pa, pb);
        break;
      case 8:
        movs[i] = new Mover(setex, setey);
        movs[i].target = createVector(setex, pb);
        break;
    }
  }
}

function draw() {
    var i;
    for(i=0;i<9;i++){

      switch (i){
      case 0:
        movs[i].target = createVector(pa,pb);
        break;
      case 1:
        movs[i].target = createVector(pa,pb);
        break;
      case 2:
        movs[i].target = createVector(pa, cincoy);
        break; 
      case 3:
        movs[i].target = createVector(pa, setey);
        break;
      case 4:
        movs[i].target = createVector(setex, pb);
        break;
      case 5:
        movs[i].target = createVector(quatrox, seisy);
        break;
      case 6:
        movs[i].target = createVector(pa, pb);
        break;
      case 7:
        movs[i].target = createVector(pa,pb);
        break;
      case 7:
        movs[i].target = createVector(setex,pb);
        break;
      }
      movs[i].update();
      movs[i].desenha();
    }
}


function logofunction (x, y, raio, r, g, b){
  var angle = TWO_PI / 10;
  var contador = 0;
  pa=x;
  pb=y;
  noFill();

  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * raio;
    var sy = y + sin(a) * raio;
    stroke('rgba(255,255,255,0.2)');
    vertex(sx, sy);
    contador++;
    switch(contador) {
    case 0:
      var zerox=sx;
      var zeroy=sy;
      break;
    case 1:
      var umx=sx;
      var umy=sy; 
      break;
    case 2:
      doisx=sx;
      doisy=sy;
      break;
    case 3: 
      var tresx=sx;
      tresy=sy;
      break;
    case 4: 
      quatrox=sx;
      var quatroy=sy;
      break;
    case 5:
      cincox=sx;
      cincoy=sy;
      break;
    case 6:
      seisx=sx;
      seisy=sy;
      break;
    case 7:
      setex=sx;
      setey=sy;
      break;
    case 8:
      var oitox=sx;
      oitoy=sy;
      break;
    case 9: 
      var novex=sx;
      var novey=sy;
      break;
    case 10:
      dezx=sx;
      dezy=sy;
      break;
    }
  }
  endShape(CLOSE);
}

class Mover {
  constructor(a,b){
    this.position = createVector(a,b);
    this.velocity = createVector(0,0);
    this.aceleration = createVector(0,0);
    this.target = createVector(0,0);
    this.maxVelocity = 1;
    this.maxAceleration = 1;
  }
  update(){
    this.aceleration = p5.Vector.sub(this.target,this.position);
    this.aceleration.limit(this.maxAceleration);

    this.velocity.add(this.aceleration);
    this.velocity.limit(this.maxVelocity);

    this.position.add(this.velocity);
  }
  desenha(){
    noStroke();
    fill('#e8e8eb');
    rect(this.position.x,this.position.y,2,2);
  }
}
