$(document).ready(function(){ //when document is ready

var canvas = $('#canvas')[0];
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if (canvas.getContext) {
  //get rendering context, through getContext() we can use draw functions
  var ctx = canvas.getContext('2d');

  var w = canvas.width;
  var h = canvas.height;

  ctx.strokeStyle = 'rgba(174,194,224,0.5)'; //raindrop color
  ctx.lineWidth = 1; //raindrop width
  ctx.lineCap = 'round'; //raindrop shape

  var init = [];
  var maxParts = 1000; //Amount of raindrop

  for (var a = 0; a < maxParts; a++) {
    init.push({
      x: Math.random() * w, //0<= x < w
      y: Math.random() * h, //0<= y < h
      l: Math.random() * 1, //0<= l < 1
      xs: -4 + Math.random() * 4 + 2, // -2<= xs < 2
      ys: Math.random() * 10 + 10 // 10<= ys < 20
    })
  }

  var particles = [];
  for (var b = 0; b < maxParts; b++) {
    particles[b] = init[b];
  }

  function draw() {
    ctx.clearRect(0, 0, w, h); //clear canvas
    for (var c = 0; c < particles.length; c++) {
      var p = particles[c];
      ctx.beginPath(); //create path
      ctx.moveTo(p.x, p.y); //move cursor without drawing
      ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys); //move cursor with drawing
      ctx.stroke(); //draw
    }
    move();
  }

  function move() {
    for (var b = 0; b < particles.length; b++) {
      var p = particles[b];
      p.x += p.xs;
      p.y += p.ys;
      if (p.x > w || p.y > h) { //if x is bigger than width or y is bigger than h
        p.x = Math.random() * w; //refactoring
        p.y = -20;
      }
    }
  }

  setInterval(draw,33); //setInterval(function, time)

}
});
