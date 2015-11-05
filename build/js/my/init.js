$(document).ready(function() {
	$("body").scrollspy({target: "#menu", offset:80});
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 80
		}, 1000);
		return false;
	});
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
	var $caseContainer = '[data-item="case"]';
	var $caseItem = $('[data-item="item"]');
	var $trigger = $($caseContainer).find('[data-item="show-case"]');
	var $remove = $('[data-item="remove-modal"]');
	$trigger.on('click',function(e){
		$(this).parents($caseContainer).toggleClass('show');
		e.preventDefault();
	});
	$remove.on('click',function(e){
		$(this).parents($caseContainer).toggleClass('show');
		e.preventDefault();
	});
});
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
	}
}
