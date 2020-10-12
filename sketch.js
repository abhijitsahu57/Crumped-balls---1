var wall1,wall2,wall3;

var ground;
var ground2;
var ball;

var play; 
var end;
var gamestate;

play = 1;
end = 0;
gamestate = play;


function setup() {
createCanvas(800, 200);

 ball = createSprite(150,50,20,20);
 ball.shapeColor = "#ff00f1";
  
  
 ground = createSprite(400,180,800,10);
 ground.shapeColor = "#fffe00";
  
    
 ground2= createSprite(400,180,800,10);
 ground2.shapeColor = "#fffe00";
  
 wall1 = createSprite(600,170,120,10);
 wall1.shapeColor = "white";
  
 wall2 = createSprite(540,140,10,60);
 wall2.shapeColor = "white";

 wall2 = createSprite(660,140,10,60);
 wall2.shapeColor = "white";
 
 
}

function draw() {
  background(30);
  
  if(gamestate === play){
   ball.velocityY = 2;
   if(ball.isTouching(ground)){
      gamestate  = end; 
      
     }
  }
  else if(gamestate===end){
   
   
  if(ball.isTouching(ground)&& ball.y >= 129){
    ball.velocityX = 16;
    ball.velocityY = -16;
  }
    
    if(ball.isTouching(wall1)){
    ball.velocityX = 0;
    ball.velocityY = 0;
      ball.visible = false ;
      ball2 = createSprite(610,150,20,20);
      ball2.shapeColor = "#ff00f1";
      
  }
  
   ball.velocityY = ball.velocityY + 2; 
  }

  drawSprites();

}