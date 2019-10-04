var time = 2, cc=1;
$(window).scroll(function(){
$('#counter').each(function(){
  var
  cPos = $(this).offset().top,
  topWindow = $(window).scrollTop();
  if (cPos < topWindow + 500) {

    if (cc<2) {
      $('pp').addClass('fix_pp');
  $('div').each(function(){
    var 
    i = 1,
    num = $(this).data('num'),
    step = 1000 * time / num,
    that = $(this),
    int = setInterval(function(){
      if (i <= num) {
        that.html(i);
      }
      else {
        cc = cc+2;
        clearInterval(int);
      }
      i++;
    },step);
  });
  }
  }
});
});

 
$(document).ready(function(){
  $(".hat").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });
});


$(document).ready(function(){
  $(".under_how_cost").on("click","aa", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });
});


$(document).ready(function(){
  $(".scroll2").on("click","aa", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });
});
