const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let wheel = new Image();
wheel.src = "img/wheel.png";
wheel.rot = 0;
wheel.xAs = 215;


let wheel2 = new Image();
wheel2.src = "img/wheel.png";
wheel2.rot = 0;
wheel2.xAs = 753;

let car = new Image();
car.src = "img/car.png";
car.xAs = 0;
car.speed = 0;
wheel.rotSpeed = 0;

let background = new Image();
background.src = "img/street.png";



wheel.addEventListener('load',()=>{
  animate();
});


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  context.drawImage(background,0,0);

  context.drawImage(car,car.xAs,300);

  context.save();
  context.translate(wheel.xAs,500);
  context.rotate(wheel.rot);
  context.drawImage(wheel,-wheel.width/2,-wheel.height/2);
  context.restore();

  context.save();
  context.translate(wheel2.xAs,500);
  context.rotate(wheel2.rot);
  context.drawImage(wheel,-wheel2.width/2,-wheel2.height/2);

  context.restore();


  wheel.rot += rotSpeed;
  wheel2.rot -= rotSpeed;
  wheel.xAs += car.speed;
  wheel2.xAs += car.speed;
  car.xAs += car.speed;

  driveBack();
  wheelRotation();
}

function wheelRotation(){

  if(car.speed == 0){
    wheel.rotSpeed = 0;
    wheel2.rotSpeed = 0;
  }
  else if(car.speed > 0){
    wheel.rotSpeed = 0.05;
    wheel2.rotSpeed = 0.05;
  }
  else if(car.speed < 0){
    wheel.rotSpeed = -0.05;
    wheel2.rotSpeed = -0.05;
  }
}

function driveBack(){

  if(car.xAs >= canvas.width)
  {
    car.xAs = 0 - 100;
    wheel.xAs = 215 - 100;
    wheel2.xAs = 753 - 100;
  }

  if(car.xAs <= -10001)
  {
    car.xAs = canvas.width;
    wheel.xAs = canvas.width + 215;
    wheel2.xAs = canvas.width + 753;
  }
}



  addEventListener('keydown',(evt)=>{
    switch (evt.key) {
      case "ArrowRight":
        car.speed += 1;
        break;

        case "ArrowLeft":
          car.speed -= 1;
          break;
      default:

    }
  });
