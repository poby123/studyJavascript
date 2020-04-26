//when document is ready
$(document).ready(function() {

  //variable
  var flagNavShow = false; //sectionB : nav bar show flag
  var flagLoginShow = false; //sectionLogin : Login show flag

  $('#barIcon').click(function(){
    $('.nav').animate({height:'toggle'});
  });

  // //처음에는 보여지지 않는 상태
  // $('.sectionB').animate({width: 'toggle'});

  /*title image click event*/
  $('#titleImg').click(function(){
    if(!flagLoginShow) {
      controlUnicornRotate();
      $('.sectionB').css('display','flex');
    }
  });//title image click event end

  /*showLoginBtn click event*/
  $('#showLoginBtn').click(function(){
    flagLoginShow = !flagLoginShow;

    if(flagNavShow){ // if nav bar is open, close the nav bar.
      controlUnicornRotate();
    }
    if(flagLoginShow){
      titleMove( [{y:0}, {y:-200}] );
      $('.sectionLogin').css('display', 'flex');
    }
    else {
      titleMove( [{y:-200}, {y:0}] );
      $('.sectionLogin').css('display', 'none');
    }
  });//end showLoginBtn click event

  function controlUnicornRotate() {
   flagNavShow = !flagNavShow;
   $('.sectionB').animate({width: 'toggle'});
   if (!flagNavShow) {
     unicornRotate([{borderSpacing:-30}, {borderSpacing:0}]);
     $('.sectionA h1').css('color', 'var(--title-color)');
   }
   else {
     unicornRotate([{borderSpacing:0}, {borderSpacing:-30}]);
     $('.sectionA h1').css('color', 'white');
   }
  }
});

function unicornRotate(v){
 $(v[0]).animate(v[1],{
   duration: 300,
   step: function(val, fx){
     $('#titleImg').css('-webkit-transform', 'rotate(' + val + 'deg)');
     $('#titleImg').css('-moz-transform', 'rotate(' + val + 'deg)');
     $('#titleImg').css('transform', 'rotate(' + val + 'deg)');
   }
 }, 'linear');
}

function titleMove( v ){
 $(v[0]).animate(v[1], {
   duration: 500,
   step: function(val) {
       $('.sectionA .container').css("transform", `translateY(${val}px)`);
   }
 })
}
