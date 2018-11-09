const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

  let kineticObject = {};

  function setUp(){
    kineticObject.point = new Point(100,200,10,"black");
    kineticObject.pos = new Vector2d(300, 100);
    kineticObject.vel = new Vector2d(3,4);
    kineticObject.acc = new Vector2d(0,1);

    for (var i = 0; i < 5; i++) {

    }

    animate();
  }

  function animate(){
  context.clearRect(0,0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  kineticObject.vel.add(kineticObject.acc);
  kineticObject.pos.add(kineticObject.vel);
  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(context);

  if(kineticObject.pos.dx > canvas.width){
    kineticObject.vel.dx = -kineticObject.vel.dx;
    kineticObject.pos.dx = canvas.width;
  }
  if(kineticObject.pos.dx < 0){
    kineticObject.vel.dx = -kineticObject.vel.dx;
    kineticObject.pos.dx = 0;
  }

  if(kineticObject.pos.dy > canvas.height){
    kineticObject.vel.dy = -kineticObject.vel.dy;
    kineticObject.pos.dy = canvas.height;
  }

  if(kineticObject.pos.dy < 0){
    kineticObject.vel.dy = -kineticObject.vel.dy;
    kineticObject.pos.dy = 0;
  }
}

  setUp();
