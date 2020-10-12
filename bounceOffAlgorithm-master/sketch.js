var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounce(fixedRect,movingRect);
  drawSprites();
}

function bounce(obj1c,obj2){
  if (obj1c.x - obj2.x < obj2.width/2 + obj1c.width/2
    && obj2.x - obj1c.x < obj2.width/2 + obj1c.width/2) {
  obj1c.velocityX = obj1c.velocityX * (-1);
  obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1c.y - obj2.y < obj2.height/2 + obj1c.height/2
  && obj2.y - obj1c.y < obj2.height/2 + obj1c.height/2){
  obj1c.velocityY = obj1c.velocityY * (-1);
  obj2.velocityY = obj2.velocityY * (-1);
}
}