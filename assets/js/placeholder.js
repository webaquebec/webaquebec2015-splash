
$(document).ready(function(){
	
	$('.contact-email, .contact-subject, .contact-message, .subscribe-email').removeAttr('placeholder');
	
	$('.contact-email').val('Courriel...');
	$('.contact-subject').val('Sujet...');
	$('.contact-message').text('Message...');
	
	$('.subscribe-email').val('Inserer votre courriel ...');
	
});