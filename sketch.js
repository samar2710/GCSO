var wall, car1;
var speed=random(55,90);
var weight=random(400,1400);
var deformation=(weight/2*speed*speed/22500);
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1400,200,50,200);
  car1=createSprite(200,200,30,30);
  car1.velocityX=speed;
  car1.shapeColor="white";
}

function draw() {
  background("black");
  if(wall1.x-car1.x<car1.width/2+wall.wdth/2){
    car1.velocityX=0;
    if(deformation<100){
      car1.shapeColor="green";
    }
    else if(deformation>100 && deformation<180){
      car1.shapeColor="yellow";
    }
    else if(deformation>180){
      car1.shapeColor="red";
    }
  }
  drawSprites();
}