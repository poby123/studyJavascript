var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//translate(= move) context to center of canvas
context.translate(canvas.width/2, canvas.height/2);

//flip context horizonally
context.scale(-1,1);

context.font = '30pt Calibri';
context.textAlign = 'center';
context.fillStyle = 'blue';
context.fillText('Hello World!', 0, 0);
