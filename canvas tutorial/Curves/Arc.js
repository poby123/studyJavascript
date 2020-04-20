var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var x = canvas.width / 2; //The X position for center point of circle
var y = canvas.height / 2;//The Y position for center point of circle
var radius = 75; //The radius of circle

/*
        1.5PI
         |
1PI<- (x,y) ->0PI
        |
       0.5PI
*/

var startAngle = 0.8 * Math.PI; //set angle. Refer to the picture above.
var endAngle = 0.3 * Math.PI;

//false : 시계방향
var counterClockwise = false; //counter Clockwise의 뜻이 반시계 방향이라는 뜻이다.

context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
context.lineWidth = 15;

//line color
context.strokeStyle = 'black';
context.stroke();
