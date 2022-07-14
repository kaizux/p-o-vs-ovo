var xadrez,faca,ovo;
var gordo,pao;
var score = 0;
var xadrezImg,facaImg,ovoImg,gordoImg,paoImg;


function preload(){
  xadrezImg = loadImage("./assets/xadrez.png")
  facaImg = loadImage("./assets/faca.png")
  ovoImg = loadImage("./assets/ovo.png")
  gordoImg= loadImage("./assets/gordo.png")
  paoImg  = loadImage("./assets/pao.png")
}

function setup(){
  createCanvas(800,800)
  
  xadrez=createSprite(200,200);
  xadrez.addImage(xadrezImg);
  xadrez.velocityY = -4;

  pao = createSprite(200,100,50,40)
  pao.addImage(paoImg)
  pao.scale = 0.07
  
  imageMode(CENTER)
}

function draw(){
  background(20)
  image(xadrezImg,width/2,height/2,800,800)

  if(xadrez.y < 0 ){
    xadrez.y = xadrez.width/2;
  }
  
  var selectSprite = Math.round(random(1,3))
  if(frameCount % 80 == 0){
    if(selectSprite == 1){
      criarOvo()
    }
    else{
      criarFaca()
    }
  }
  
  
  
  
  
  
  
  
  drawSprites()
}

function criarOvo(){
  ovo = createSprite(random(50,750),180,100,60,50);
  ovo.addImage(ovoImg);
  ovo.scale = 0.07;
  ovo.velocityY = 2;
  ovo.lifetime = 150;
}

function criarFaca(){
  faca = createSprite(random(50,750),190,100,40,50);
  faca.addImage(facaImg);
  faca.scale = 0.20;
  faca.velocityY = 2;
  faca.lifetime = 150;
}
