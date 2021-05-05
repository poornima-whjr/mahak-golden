
var spaceShip;
var bg1,bgImage;
var obstacles;
function preload(){
  bgImage=loadImage("starry-night-sky.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1=createSprite(width/2,height/2)
  bg1.addImage(bgImage);
  spaceShip=createSprite(windowWidth/2, windowHeight/2, 25, 50);
}

function draw() {
  background("black");  
  //spaceShip.rotation=0
 // spawnObstacles();
  infiniteBg();
  drawSprites();
}

function keyPressed(){

  if(keyCode===LEFT_ARROW){
    //bg1.velocityX=10;
    //bg1.velocityY=0
    bg1.velocityX=bg1.velocityX+2
    spaceShip.rotation=spaceShip.rotation-10
    
  }
  if(keyCode===RIGHT_ARROW){
    bg1.velocityX=bg1.velocityX-2
    //bg1.velocityX=-10;
    //bg1.velocityY=0
  }
  if(keyCode===DOWN_ARROW){
    bg1.velocityY=bg1.velocityY-2
    //bg1.velocityY=-10;
    //bg1.velocityX=0
  }
  if(keyCode===UP_ARROW){
    bg1.velocityY=bg1.velocityY+2
    //bg1.velocityY=+10;
    //bg1.velocityX=0
  }
  
}
function spawnObstacles(){
  if(frameCount%50===0){
    var x = random(spaceShip.x-width/2,spaceShip.x+width/2)
    var y = spaceShip.y-height/2
    obstacles=createSprite(x,y);
    
  }
}

function infiniteBg(){
  
  if(bg1.x>bg1.width/2 || bg1.x<-(bg1.width/2-width)){
    bg1.x=width/2
  }
  
  if(bg1.y>bg1.height/2-height || bg1.y < -(bg1.height/2-height)){
    bg1.y=height/2
  }
  
  
}
 
