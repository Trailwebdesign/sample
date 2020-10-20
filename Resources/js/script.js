$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-objective').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    $('.js--wwd-section-1').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
   
    /* Scrolling */
    
    $('.js--scroll-to-team').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-team').offset().top}, 1000); 
    });
    
    
    /* Animate on Scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /* mobile nav*/

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-more')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-more');
        } else {
            icon.addClass('ion-more');
            icon.removeClass('ion-close-round');
        }        
    });
    
    
    
    
    
});