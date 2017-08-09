console.log('JS is sourced');

const ballRadius = 5;

let canvas = document.getElementById('draw');
let ctx = canvas.getContext("2d");
let x, y;
let down = false;

//listeners
canvas.addEventListener("mousedown", function (e){
  down = true;
}, false);
canvas.addEventListener("mouseup", function (e){
  down = false;
}, false);
canvas.addEventListener("mousemove", function (e) {
  if(down === true){
           findXY(e);
           drawBall(x, y);
         }
       }, false);
//finds x and y coordinates
function findXY(event) {
  x = event.clientX;
  y = event.clientY;
}
//draws
function drawBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}
