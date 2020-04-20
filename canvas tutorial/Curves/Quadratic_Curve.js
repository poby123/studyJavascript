var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(188,180); //start point(context point)

//quadraticCurveTo(control point x, control point y, ending x, ending y)
context.quadraticCurveTo(288,-100,388,180);
context.lineWidth = 10;
context.lineCap = 'round';

context.strokeStyle = 'cyan';
context.stroke();
