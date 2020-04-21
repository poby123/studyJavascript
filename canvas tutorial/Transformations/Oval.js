var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var centerX = 0;
var centerY = 0;
var radius = 50;

context.save();

context.translate(canvas.width / 2, canvas.height / 2);

context.scale(2,1);

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

context.restore();

context.fillStyle = 'cyan';
context.fill();
context.lineWidth = 5;
context.strokeStyle = 'blue';
context.stroke();
