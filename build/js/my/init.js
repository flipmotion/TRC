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
    $(document).on( 'click', '.dropdown-menu', function (e){
        e.stopPropagation();
    });
    $('.form-search input').focus(function(e){
        $(this).parent('form').addClass('focus');
    });
    $('.form-search input').focusout(function(e){
        $(this).parent('form').removeClass('focus');
    });
});
$(function() {
    $('[data-item="sort"]').sortable({
      revert: true
    });
    $( "ul, li" ).disableSelection();
});
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
	}
}

$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
         // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) || 
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});