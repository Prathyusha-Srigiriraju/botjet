

$(window).scroll(function () {
            scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".logo").addClass("logoleft");
            $(".logo2").addClass("logoleft");
            $(".dropnav").addClass("navright");
            $("header").addClass("fixedbg");
        }
        else {
            $(".logo").removeClass("logoleft");
            $(".dropnav").removeClass("navright");
            $("header").removeClass("fixedbg");
        }
});

$(document).ready(function() {

    $('.button').click(function(){
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
      })
      
      $('#modal-container').click(function(){
        $(this).addClass('out');
        $('body').removeClass('modal-active');
      });


    $('.scrolltop').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });


    $('nav li:not(:first-child) a').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 28;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 1700);
        return false;
    });

    setTimeout(function(){
    $("body").addClass("fade2");
    }, 1200);
    setTimeout(function(){
        $(".bannertext").fadeIn();
        $('.tlt').textillate(); 
    }, 3000);

    
    $(window).scroll(function() {

        $('.servicesactive').each( function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if ( topOfWindow  >= imagePos ) {
               $(".a1").removeClass("active");
               $("nav li:nth-child(2) a").addClass("active");
            }
            else{
                $("nav li:nth-child(2) a").removeClass("active");
                $(".a1").addClass("active");
            }
        }); 

        $('.platformactive').each( function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if ( topOfWindow  >= imagePos ) {
            $("nav li:nth-child(3) a").addClass("active");
               $("nav li:nth-child(2) a").removeClass("active");
            }
            else{
                $("nav li:nth-child(3) a").removeClass("active");
            }
        }); 

        $('.usecaseactive').each( function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if ( topOfWindow  >= imagePos ) {
            $("nav li:nth-child(4) a").addClass("active");
               $("nav li:nth-child(3) a").removeClass("active");
            }
            else{
                $("nav li:nth-child(4) a").removeClass("active");
            }
        }); 

        
        $('.aboutactive').each( function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if ( topOfWindow  >= imagePos ) {

            $("nav li:nth-child(5) a").addClass("active");
            $("nav li:nth-child(4) a").removeClass("active");

            }
            else{
                $("nav li:nth-child(5) a").removeClass("active");
            }
        }); 

        $('.contactactive').each( function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if ( topOfWindow  >= imagePos ) {
            $("nav li:nth-child(6) a").addClass("active");
               $("nav li:nth-child(5) a").removeClass("active");
            }
            else{
                $("nav li:nth-child(6) a").removeClass("active");
            }
        }); 

        // if (window.matchMedia('(max-width:991px)').matches) {
        //     $('.d-about').each( function(){
        //              var imagePos = $(this).offset().top;
        //         var topOfWindow = $(window).scrollTop();
        //         if ( topOfWindow  >= imagePos ) {
        //         }
        //         else{
        //             $("nav li:nth-child(6) a").css("color","#8E8E8E");
        //             $("nav li:nth-child(6) a").removeClass("active");
        //         }
        //     }); 
        // }

        // if (window.matchMedia('(max-width:767px)').matches) {
        //     $('.d-about').each( function(){
        //              var imagePos = $(this).offset().top;
        //         var topOfWindow = $(window).scrollTop();
        //         if ( topOfWindow  >= imagePos ) {
        //         }
        //         else{
        //             $("nav li:nth-child(6) a").css("color","#fff");
        //             $("nav li:nth-child(6) a").addClass("active");
        //         }
        //     }); 
        // }

         /** disable animations */


        if (window.matchMedia('(max-width:1024px)').matches) {
            $('#effect1').attr("data-parallax", '');
        }
  
    });

    // /** form validations */

    $(".nospace").keypress(function (e) {
        var key = event.keyCode;
        if (key === 32 && event.target.selectionStart === 0) {
            event.preventDefault();
        } else {

        }
    });

    $(function () {
        $('.floating-label input[type=email]').on('keypress', function (e) {
            if (e.which == 32)
                return false;
        });
    });

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.menu2').click(function(){
            $('.dropnav').addClass("slidemenu");
            // $('.width2').addClass("hidescroll");
            $('body').css('overflow','hidden');
        });

        $('.closemenu').click(function(){
            $('.dropnav').removeClass("slidemenu");
            $('body').css('overflow','inherit');
        });

        $('.dropnav a').click(function () {
            $('.dropnav').removeClass("slidemenu");
            $('body').css('overflow','inherit');
        });
    }


});

