const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let gear = new Image();
gear.src = "img/Gear.png";
gear.rot = 0;

let gear2 = new Image();
gear2.src = "img/Gear.png";
gear2.rot = 0.25;

let gear3 = new Image();
gear3.src = "img/Gear.png";
gear3.rot = 0.25;

gear.addEventListener('load',()=>{
  animate();
});


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  context.save();
  context.translate(250,250);
  context.rotate(gear.rot);
  context.drawImage(gear,-gear.width/2,-gear.height/2);
  context.restore();

  context.save();
  context.translate(333,320);
  context.rotate(gear2.rot);
  context.drawImage(gear2,-gear2.width/2,-gear2.height/2);
  context.restore();
  gear.rot += 0.01;
  gear2.rot -= 0.01;

  createGear(3,400,400);
}

function createGear(number, x, y){
  context.save();
  context.translate(x, y);
  context.rotate(gear + number + ".rot");
  context.drawImage(gear,-gear + number + ".width"/2,-gear + number + ".height"/2);
  context.restore();
}
