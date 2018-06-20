$(document).ready(function(){
	$("#cta p").delay(1000).fadeIn(1000);
	$("#cta a").delay(1000).animate({
		marginRight: '0px'
	}, 1000);
	$("#pageone ul li").delay(1400).animate({
		marginLeft: '0px'
	}, 1000);
	$('#pagethree img').on('click', function() {
        $(this).parent().parent().next().css("display", "flex");
        $(this).parent().parent().next().animate({
        	opacity: 1
        });
    });
    $('.solution_bg').on('click', function() {
    	$(this).animate({
    		opacity: 0
    	}, function() {
    		$(this).css("display", "none");
    	});
    });
});