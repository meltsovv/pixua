$('.js-button_sign-campaign').click(function(){
	$('section').css('filter','blur(5px)');
	$('.js-overlay_sign-campaign').fadeIn();
	$('.js-overlay_log-campaign').fadeOut();

});
$('.js-close_sign-campaign').click(function(){
	$('.js-overlay_sign-campaign').fadeOut();
	$('section').css('filter','none');
});
$('.js-button_log-campaign').click(function(){
	$('section').css('filter','blur(5px)');
	$('.js-overlay_log-campaign').fadeIn();
	$('.js-overlay_sign-campaign').fadeOut();
	

});
$('.js-close_log-campaign').click(function(){
	$('.js-overlay_log-campaign').fadeOut();
	$('section').css('filter','none');
});
$(document).ready(function(){
	$('#like_anim').click(function(){
		$('#like_anim').toggleClass('active')
	})
})
// $('.items').click(function(){
// 	$('section').css('filter','blur(5px)');
// 	$('.slider').fadeIn();
// });
$('.close').click(function(){
	$('#slider').fadeOut();
	$('section').css('filter','none');
});
$('#next').click(function(){
	$('#album1').css('display','none');
	$('#next').css('display','none');
	$('#album2').css('display','block');
	$('#back').css('display','block');
});
$('#back').click(function(){
	$('#album2').css('display','none');
	$('#back').css('display','none');
	$('#album1').css('display','block');
	$('#next').css('display','block');
});