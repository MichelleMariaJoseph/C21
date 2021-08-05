var fixedRect, movingRect;
var ball
var obj1, obj2, obj3, obj4

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball = createSprite(300, 500, 50, 100)
  ball.shapeColor = "purple"

  obj1 = createSprite(100, 300, 42, 70)
  obj2 = createSprite(500, 300, 35, 60)
  obj1.shapeColor = "pink"
  obj2.shapeColor = "orange"
  obj1.velocityX = 2
  obj2.velocityX = -2

  obj3 = createSprite(200, 50, 27, 84)
  obj4 = createSprite(200, 250, 68, 25)
  obj3.shapeColor = "cyan"
  obj4.shapeColor = "maroon"
  obj3.velocityY = 2
  obj4.velocityY = -2


}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, ball)) {
    ball.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  else if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    ball.shapeColor = "purple";
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(obj1, obj2)
  bounceOff(obj3, obj4)

  drawSprites();
}

