// The ending point of each new subpath becomes the new context point.

//We can use the lineTo(), arcTo(),
//quadraticCurveTo(), and bezierCurveTo() methods to construct
//each subpath which makes up our path.

// We can also use the beginPath() method each time
//we want to start drawing a new path.

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(100, 20); //start point

// line 1
context.lineTo(200, 160);

// quadratic curve
context.quadraticCurveTo(230, 200, 250, 120);

// bezier curve
context.bezierCurveTo(290, -40, 300, 200, 400, 150);

// line 2
context.lineTo(500, 90);

context.lineWidth = 5;
context.strokeStyle = 'blue';
context.stroke();
