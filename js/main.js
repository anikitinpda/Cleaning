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
})

//плавная прокрутка по всей странице
$('a[href*="#"]').on('click.smoothscroll', function( e ){
var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
if( ! $target.length ) return;
e.preventDefault();
$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 400, 'swing', function(){
window.location.hash = hash;
})
})

