$(function() {
    $('.gallery_image img').hover(function() {
      $(this).animate({
              backgroundColor: "#66913D", opacity: "1.0"
				}, 'fast'); }, function() {
                  $(this).animate({
                          backgroundColor: "#555", opacity: "0.9"
                  }, 'normal');
                });

								
	/* Load jQuery Carousel -> Pressemittelungen */

		$('.view-pressemitteilungen ul.pressemitteilungen .pdf-trigger').click(function(){
			if($(this).hasClass('active')) {
			// Do Nothing
			} else {
				$(this).addClass('active');
				$(this).parent().find('.pdf').slideToggle();
				$(".view-pressemitteilungen .pressemitteilungen .pdf-trigger").not(this).parent().find('.pdf').slideUp();
				$(".view-pressemitteilungen .pressemitteilungen .pdf-trigger").not(this).removeClass('active');
			}
		});
	
	$('.view-pressemitteilungen ul.pressemitteilungen').find('.pdf-trigger').click(function(){
		
		$(this).parent('li').find('img').rotate({animateTo:90});
		$('.view-pressemitteilungen ul.pressemitteilungen li').find('.pdf-trigger').not(this).find('img').rotate({animateTo:0});
		
	});
	
	
								
});	