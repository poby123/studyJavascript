var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var rectWidth = 150;
var rectHeight = 75;

context.save();
//save state1

context.translate(canvas.width/2, canvas.height/2)
context.save();
//save state2

context.rotate(Math.PI / 4);
context.save();
//save state3

context.scale(2,2);
context.fillStyle = 'blue';
context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);

//restore state 3
context.restore();
context.fillStyle = 'red';
context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);

//restore state2
context.restore();
context.fillStyle = 'yellow';
context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);

//restore state1
context.restore();
context.fillStyle = 'green';
context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);
