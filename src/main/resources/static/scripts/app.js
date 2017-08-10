console.log('JS is sourced');

const ballRadius = 5;

let canvas = document.getElementById('draw');
let postBtn = document.getElementById('postButton');
let inputed =document.getElementById('inputed');
let ctx = canvas.getContext("2d");
let x, y;
let down = false;

//listeners
postBtn.addEventListener("click", function (){
postName();
}, false);
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
function postName(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.readyState);
     document.getElementById("response").innerHTML = this.responseText;
   } else if (this.readyState == 4 && this.status == 418){
     console.log(this.readyState);
     console.log(this.responseText);
     document.getElementById("response").innerHTML = this.responseText;
   }
   console.log(this.readyState);
  };
  xhttp.open("POST", "/hello", true);
  console.log(inputed.value, typeof inputed.value);
  xhttp.send(inputed.value);
}
