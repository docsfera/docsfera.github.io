
var options = {
  offset: 600

}
var header = new Headhesive('.hat', options);

// ОКНО РЕГИСТРАЦИИ И Т.Д

/*$(".text").mouseover(function(){
	$(this).css("background-image",'url(img/tovar-4.jpg)');
});*/

$(".exit_registration_box").click(function(){
	$(".registration_box").fadeOut();
	$(".second").css('filter', 'blur(0px)');
	$("body").css('background-color', '');
	$("html,body").css("overflow","visible");
	$(".hat").css('display', '');

	$('div .dontmovebut').children().removeClass("btn1_anti").addClass("btn-1");  // hover
	$('div #dontmove').children().children().removeClass("rotate_anti").addClass("rotate");  // hover

	$("body").css("background-color", "white");
	$(".dont_care").css("background-color", "#EFF0F1");
	$(".second").css("background-color", "#EFF0F1");
	$("#move_img").css("background-color", "white");


});

$("#bt1").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-1.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise1").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("1");
	// Затемнение
	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");
});


$("#bt2").click(function(){
	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-2.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 	
	$(".prise_under_img").text($("#prise2").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("2");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");
});

$("#bt3").click(function(){
	$("#img_registration1").attr("src","img/tovar-3.png");
	$(".registration_box").fadeIn();
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise3").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("3");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");


});

$("#bt4").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-4.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise4").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("4");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt5").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-5.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise5").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("5");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt6").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-6.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise6").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("6");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt7").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-7.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise7").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("7");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt8").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-8.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise8").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("8");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt9").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-9.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise9").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("9");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt10").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-10.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise10").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("10");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt11").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-11.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise11").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("11");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt12").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-12.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise12").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("12");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt13").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-13.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise13").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("13");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt14").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-14.png");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise14").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("14");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt15").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-15.png");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise15").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("15");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt16").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-16.png");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise16").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("16");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt17").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-17.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise17").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("17");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt18").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-18.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise18").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("18");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt19").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-19.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise19").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("19");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});
$("#bt20").click(function(){

	$(".registration_box").fadeIn(600);
	$("#img_registration1").attr("src","img/tovar-20.jpg");
	$(".second").css('filter', 'blur(15px)');
	$("body").css('background-color', 'rgba(0, 0, 0, 0.5)');
	//$("html,body").css("overflow","hidden"); // ЗАПРЕТ СКРОЛЛА
	$("body").css('position', 'relative'); // Улучшенная версия т.к. не отсутсвует скролл
	$("body").css('overflow', 'hidden');  // к началу блока основного!1
	$(".hat").css('display', 'none'); 
	$(".prise_under_img").text($("#prise20").text());

	$('div .dontmovebut').children().removeClass("btn-1").addClass("btn1_anti");  // забераем ховер buttom
	$('div #dontmove').children().children().removeClass("rotate").addClass("rotate_anti");  // забераем ховер img

	$("input.4").val("20");

	$("body").css("background-color", "rgba(0,0,0,0.1)");
	$(".dont_care").css("background-color", "rgba(0,0,0,0.1)");
	$(".second").css("background-color", "rgba(0,0,0,0.1)");
	$("#move_img").css("background-color", "rgba(0,0,0,0.1)");

});

/*$("div .under_how_cost").click(function(){
	alert("rr");
});*/


$("#error_buttom").click(function(){

	$(".registration_box").fadeOut();
	$(".second").css('filter', 'blur(0px)');
	$("body").css('background-color', '');
	$("html,body").css("overflow","visible");
	$(".hat").css('display', '');

	$('div .dontmovebut').children().removeClass("btn1_anti").addClass("btn-1");  // hover
	$('div #dontmove').children().children().removeClass("rotate_anti").addClass("rotate");  // hover
	

});


