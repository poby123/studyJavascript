var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var rectWidth = 150;
var rectHeight = 75;

context.translate(canvas.width/2, canvas.height/2);

//rotate 45 degrees clockwise(시계방향)
context.rotate(Math.PI / 4);

context.fillStyle = 'blue';
context.fillRect(rectWidth / -2, rectHeight / -2 , rectWidth, rectHeight);
