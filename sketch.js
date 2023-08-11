let cor;
let circuloX;
let circuloY;
let tamanho;

function setup() {
  
  createCanvas(400,400);
  background("brown");
  cor = color(random(0,255), random(0,255), random(0,255));
  circleX = [0,0];
  circleY = [random(height), random(height)];
  tamanho = 50; 

}

function draw() {
 
  stroke(cor);
  fill(cor);
  for (let contador in circuloX);
  circle(circuloX[contador], circuloY[contador], 50);
  
  
  circleX[contador]+= random(0,3);
  circleY[contador]+= random(-3,3);
 
  posicaoHorizontal+= random(1,4);
  posicaoVertical += random(-3,3);
  posicaoHorizontal2+= random(1,4);
  posicaoVertical2+= random(-3,3);
  
if(mouseIsPressed){
   cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
 }


}






