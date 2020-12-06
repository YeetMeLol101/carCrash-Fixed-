var wall, car;
var speed,weight,deformation;

function setup() {
  createCanvas(1500,800);
  wall = createSprite (1200, 400, 60, height/2);
  car = createSprite (500,400,50,50)
  car.shapeColor = "grey";
  

  speed = random(55,90);
  weight = random(400,1500)
  deformation = (0.5*weight*speed*speed)/22500
  
}

function draw() {
  background(0);  
  
  car.velocityX = speed;

  if (isTouching(car,wall) && deformation < 80){
    car.shapeColor = "green";
    car.velocityX = 0;
  }
  else{
    if (isTouching(car,wall) && deformation > 180){
      car.shapeColor = "red";
      car.velocityX = 0;    
    }
    else{
      if (isTouching(car,wall)){
        car.shapeColor = "yellow";
        car.velocityX = 0;    
      } 
    }
  }


  

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
  else {
    return false;
  }
}