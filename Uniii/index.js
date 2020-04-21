$(document).ready(function(){
  var flagShow = false;
  $('.sectionB').animate({width:'toggle'}); //처음에는 보여지지 않는 상태

  var unicornAnimate = function(now,fx) {
    $(this).css('-webkit-transform','rotate('+now+'deg)');
    $(this).css('-moz-transform','rotate('+now+'deg)');
    $(this).css('transform','rotate('+now+'deg)');
  };

  $('#titleImg').click(function(){
    $('.sectionB').animate({width:'toggle'});
    flagShow = !flagShow;

    if(!flagShow){
      $('#titleImg').animate({ borderSpacing: 0 }, {
    step: unicornAnimate, duration:'slow'},'linear');

    }else{

      $('#titleImg').animate({ borderSpacing: -30 }, {
    step: unicornAnimate, duration:'slow'},'linear');

    }
  });
});
