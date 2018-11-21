const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let midX = canvas.width/2;
let midY = canvas.height/2;

let myTime = new Date();

let clockFace = new Image();
clockFace.src = "img/clockFace.png";

let secondHand = new Image();
secondHand.src = "img/secondHand.png";

let minutesHand = new Image();
minutesHand.src = "img/minutesHand.png";

let hoursHand = new Image();
hoursHand.src = "img/hoursHand.png";


clockFace.addEventListener('load',()=>{
  animate();
});


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(clockFace, midX-clockFace.width/2, midY-clockFace.height/2);

  myTimeS = new Date();
  context.save();
  context.translate(midX,midY);
  context.rotate(myTimeS.getSeconds()*2*Math.PI/60);
  context.drawImage(secondHand, -70,-233);
  context.restore();

  context.save();
  context.translate(midX,midY);
  context.rotate(myTime.getMinutes()*2*Math.PI/60);
  context.drawImage(minutesHand, -19, -180);
  context.restore();

  context.save();
  context.translate(midX,midY);
  context.rotate(myTime.getHours()*2*Math.PI/12);
  context.drawImage(hoursHand, -20,-118);
  context.restore();


  //console.log(myTime);
}
