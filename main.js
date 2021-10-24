var canvas = document.getElementById("myCanvas");
console.log(canvas)
ctx=canvas.getContext("2d")
var color="black"
var widthofline=1
var mousevent=""
var current_position_x=0
var current_position_y=0
var last_position_x=0
var last_position_y=0
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
mousevent="Mdown"
console.log(mousevent)
color=document.getElementById("color").value;
widthofline=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mousevent="Mdown"
} 
canvas.addEventListener("mouseleave",my_mouseleave)  
function my_mouseleave(e){
    mousevent="Mleave"
    console.log(mousevent)
}              
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mousevent="Mup"
    console.log(mousevent)
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
  current_position_x=e.clientX - canvas.offsetLeft
  current_position_y=e.clientY - canvas.offsetTop
    if (mousevent=="Mdown") {
     console.log("Current position of x and y coordinates = ")
     console.log("x = " +current_position_x + "y ="+ current_position_y);
     ctx.beginPath()
     ctx.strokeStye = color
     ctx.lineWidth= widthofline
     ctx.arc(current_position_x, current_position_y, radius, 0, 2*Math.PI)
     ctx.stroke()
    }
    last_position_x=current_position_x
    last_position_y=current_position_y
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}