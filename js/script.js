(function($) {
    /**
     * Set up page with adjusted div sizes
     */
    function setDimensions(){
       var windowHeight = $(window).height();
       var windowWidth = $(window).width();
       var heroImg = $('#hero-image');
       var heroHeight = windowHeight - 134;
       if ( windowHeight > windowWidth ) {
           heroImg.css('height', '100%');
       } else {
           heroImg.css('width', '100%');
       }
           var speelHeight = $('#speel').height();
           var heroPadding = (heroHeight - speelHeight) / 2;

           $(heroImg).css('padding-top', heroPadding);
           $(heroImg).css({'min-height': heroHeight });
    }

    $(document).ready(function(){
       setDimensions();
        $('#mobile-menu-button').on('click', function(){
              $('#mobileNav').toggleClass('displayBlock');
 
              var mobileButton = $('#mobile-menu-button');

              if ( mobileButton.children('.color-bar').hasClass('bar1') ) {
                   $('#mobile-menu-button').children('.color-bar1').removeClass('bar1');
                   $('#mobile-menu-button').children('.color-bar2').removeClass('bar2');
                   $('#mobile-menu-button').children('.color-bar3').removeClass('bar3');
              } else {
                   $('#mobile-menu-button').children('.color-bar1').addClass('bar1');
                   $('#mobile-menu-button').children('.color-bar2').addClass('bar2');
                   $('#mobile-menu-button').children('.color-bar3').addClass('bar3');
             }
        });
  
    });
    /**
     * Detect if browser resizes and re adjust div sizes
     *
     */
    $(window).resize(function(){
       setDimensions();   
    });

    /**
     * reveal answer on show me / tell me
     */
     $(document).ready(function(){
         $(".chevron-down").click(  function(){

             // store .chevron-down used to manipulate later
            var down = $(this);
            // find the parent containing chevron
            var contClass = $(this).parent().parent();
            // find the answer classed element within this group
            var answerClass = contClass.children('.answer');
            // slide down to reveal answer

            answerClass.slideToggle( 'fast', function(){

                if (down.hasClass('chevron-down')) {

                   down.removeClass('chevron-down');
                   down.addClass('chevron-up');
                } else {
                   down.removeClass('chevron-up');
                   down.addClass('chevron-down');
               }
            });
        });
    });
})( jQuery );
