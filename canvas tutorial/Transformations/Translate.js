var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var rectWidth = 150;
var rectHeight = 75;

//Translate context to center of myCanvas
//This point is point of original
context.translate(canvas.width/2, canvas.height/2);

context.fillStyle = 'blue';

//fillRect(start x, start y, rectangle width, rectangle height);
context.fillRect(rectWidth / -2 , rectHeight / -2, rectWidth, rectHeight);
