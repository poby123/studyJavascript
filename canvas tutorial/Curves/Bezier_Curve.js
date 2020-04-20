var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(188, 130); //start point

//(control point1.x, cp1.y, cp2.x, cp2.y, end point x, end point y)
context.bezierCurveTo(140, 10, 388, 10, 388, 130);
context.lineWidth = 10;

// line color
context.strokeStyle = 'black';
context.stroke();
