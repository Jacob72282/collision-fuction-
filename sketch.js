var fixRect,movingRect
function setup() {
  createCanvas(1200,800);
  fixRect=createSprite(600,400,80,50);
  fixRect.shapeColor="red";
  movingRect=createSprite(600,200,200,100);
  movingRect.shapeColor="red";

}

function draw() {
  background(0);
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if (movingRect.x-fixRect.x<movingRect.width/2+fixRect.width/2 &&
    fixRect.x-movingRect.x<movingRect.width/2+fixRect.width/2 &&
    movingRect.y-fixRect.y<movingRect.height/2+fixRect.height/2 &&
    fixRect.y-movingRect.y<movingRect.height/2+fixRect.height/2){ 

    fixRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
movingRect.shapeColor="red";
fixRect.shapeColor='red';

  }
  
  drawSprites();
}