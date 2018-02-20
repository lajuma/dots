
$(document).ready(function () {

  let pickedColor = 'black';
  let clicks = 0;

  // init
  fillCanvas();
  getMessage('start');
  animateLogo();

  $('.logo').on('click', animateLogo);

  $('#btn-draw').simpleColorPicker({
    onChangeColor: function(color) {
      setColorPresets(color);
      pickedColor = color;
      getMessage('beforeDraw');
      $('.dot').unbind('mouseover click');
      clicks = 2;
    }
  });

  $('#btn-rub').on('click', function() {
    pickedColor = '';
    $('.dot').unbind('mouseover click');
    if (clicks === 0) {
      getMessage('errorRub');
    } else {
      getMessage('beforeRub');
      clicks = 2;
    }

  });

  $('#dot-box').on('click', function() {
     if (clicks % 2 === 1) {
        $('.dot').unbind('mouseover click');
        if (pickedColor !== '') {
          getMessage('continueDraw');
        } else {
          getMessage('continueRub');
        }
     } else {

       if (pickedColor !== '') {
         getMessage('draw');
         $('.dot').on('click mouseover', function() {
           $(this).css('background-color', pickedColor);
           drawAnimation($(this));
         });
       } else {
         getMessage('rub');
         $('.dot').on('click mouseover', function() {
           rubAnimation($(this));
         });
       }
     }
     clicks++;
  });

  $('#btn-reset').on('click', function() {
    $('.dot').unbind('mouseover');
    getMessage('reset');
    clicks = 0;
    pickedColor = 'black';
    $('#colorDesc').text('black (default)').css('color', pickedColor);
    resetAnimation();
    });

});
