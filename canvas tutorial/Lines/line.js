var canvas = document.getElementById('myCanvas'); //getElement
var context = canvas.getContext('2d'); //to use below powerful method
context.beginPath(); //begin path
context.moveTo(100,150); //just move without drawing
context.lineTo(450,50); //move with drawing
context.lineWidth = 15; //set line width
context.lineCap = 'round'; //set shape of end of stick
context.strokeStyle = 'red'; //set strokeStyle => line color
context.stroke(); //draw
