var party =25;
var r=20;
var g=150;
var b=60;

function setup() {
  createCanvas(600, 400);
  background(0);
}
function draw() {
  fill('r, g, b')
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, party, party);
  }
  }
