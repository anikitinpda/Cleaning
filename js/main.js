//плавная прокрутка страницы на якорь
$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
 })
})

//закрывает мобильное меню после нажатия на ссылку
$('.navbar-collapse').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    $a = $($(this).attr('href'));
    $('html,body').animate({ scrollTop: $a.offset().top - 50}, 500);
    return false;
})
