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