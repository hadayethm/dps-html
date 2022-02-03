(function ($) {
    "use strict";
  	/*----------------------------------------
 	          Preloader
 	 ----------------------------------------*/

      $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });
    
    // Mean Menu JS
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});
	$(function () {
        new WOW().init();
    });
 

   
}(jQuery));

