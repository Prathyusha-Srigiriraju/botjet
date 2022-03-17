    // $("#my-element, [data-paroller-factor]").paroller({
    //     factor: 0.3,            // multiplier for scrolling speed and offset
    //     factorXs: 10000,           // multiplier for scrolling speed and offset
    //     type: 'foreground',     // background, foreground
    //     direction: 'vertical' // vertical, horizontal
    // }); 

    // $("#bannereffect, [data-paroller-factor]").paroller({
    //     factor: 1,            // multiplier for scrolling speed and offset
    //     factorXs: 3,           // multiplier for scrolling speed and offset
    //     type: 'background',     // background, foreground
    //     direction: 'horizontal' // vertical, horizontal
    // });

    // $("#effect0, [data-paroller-factor]").paroller({
    //     factor: 1,            // multiplier for scrolling speed and offset
    //     factorXs: 3,           // multiplier for scrolling speed and offset
    //     type: 'foreground',     // background, foreground
    //     direction: 'vertical' // vertical, horizontal
    // });

    
    // $("#effect1, [data-paroller-factor]").paroller({
    //     factor: 0.1,            // multiplier for scrolling speed and offset
    //     factorXs: 0.10,           // multiplier for scrolling speed and offset
    //     type: 'foreground',     // background, foreground
    //     direction: 'vertical' // vertical, horizontal
    // });


    
    // $("#effect2, [data-paroller-factor]").paroller({
    //     factor: -0.1,            // multiplier for scrolling speed and offset
    //     factorXs: 1,           // multiplier for scrolling speed and offset
    //     type: 'background',     // background, foreground
    //     direction: 'horizontal' // vertical, horizontal
    // });


        
    // $("#effect3, [data-paroller-factor]").paroller({
    //     factor: 0.1,            // multiplier for scrolling speed and offset
    //     factorXs: -0.1,           // multiplier for scrolling speed and offset
    //     type: 'background',     // background, foreground
    //     direction: 'horizontal' // vertical, horizontal
    // });

    // $("#effect4, [data-paroller-factor]").paroller({
    //     factor: 0.1,            // multiplier for scrolling speed and offset
    //     factorXs: -0.1,           // multiplier for scrolling speed and offset
    //     type: 'foreground',     // background, foreground
    //     direction: 'horizontal' // vertical, horizontal
    // });

    

    // $(".nav-item a").click(function(){
    //    if($(".tab-pane").hasClass("show")){
    //     $(".d-services .width-left img").addId("effect1");
    //    }    
    // });


    


    //     $(document).on('click', 'a[href^="#services"]', function (event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 1000);
    // });

    // $(document).on('click', 'a[href^="#platform"]', function (event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 1000);
    // });

    
    // $(document).on('click', 'a[href^="#usecases"]', function (event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 1000);
    // });

        
    // $(document).on('click', 'a[href^="#about"]', function (event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 1000);
    // });

    // $(document).on('click', 'a[href^="#contactus"]', function (event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 1000);
    // });


    


// $(document).ready(function(){
//     $(".anim1").addClass("scaleimg");
//     // $(".link2").click(function(){
//     //     $(".link1").addClass("bg1");
//     //     $(".link2").addClass("bg2");
//     // });
//     // $(".link2").mouseover(function(){
//     //     $(".link1").addClass("bg1");
//     //     $(".link2").addClass("bg2");
//     // });
//     // $(".link2").mouseout(function(){
//     //     $(".link1").removeClass("bg1");
//     //     $(".link2").removeClass("bg2");
//     // });
//     // $(".link1").mouseover(function(){
//     //     $(".link2").addClass("bg1");
//     // });
//     // $(".link1").mouseout(function(){
//     //     $(".link2").removeClass("bg1");
//     // });
// });




// $(document).ready(function() {

                            
//     var num = 0;
//     var script_ticker = setInterval(function(){

//         console.log(num)
//         if(num >= 0)
//             $('.text-banner2').each(function(id, el){
//                 $(this).find('img').eq(num).addClass('show');
//         });
//         if(num == 8){
//             $('.text-banner2 img:nth-child(1)').removeClass('show'); 
//             $('.text-banner2 img:nth-child(2)').removeClass('show'); 
//             $('.text-banner2 img:nth-child(3)').removeClass('show'); 
//             $('.text-banner2 img:nth-child(4)').removeClass('show'); 
//             $('.text-banner2 img:nth-child(5)').removeClass('show'); 
//             $('.text-banner2 img:nth-child(6)').removeClass('show'); 
//             $('.text-banner2 img:nth-child(7)').removeClass('show'); 
//             $('.text-banner2 img:nth-child(8)').removeClass('show');
//         }
//         if((++num) > 8) {
//             num = 0;
//             $(this).find('img').eq(num).removeClass('show');
//         }
//     }, 2800);


//     if (window.matchMedia('(max-width: 767px)').matches) {
//         $('.more').click(function(){
//             $('.drop1').slideToggle();
//             $('.more').hide();
//         });
//         $('.less').click(function(){
//             $('.drop1').slideToggle();
//             $('.more').show();
//         });
//         $('.dropnav a').click(function () {
//             $('.menusec').removeClass("slidemenu");
//             $('.width2').removeClass("hidescroll");
//             $('body').css('overflow','inherit');
//         });
//     }

//     $('.scrolltop').click(function(){
//         $('html, body').animate({scrollTop:0}, 'slow');
//     });

//     $('.menu2').click(function(){
//         $('.menusec').addClass("slidemenu");
//         // $('.width2').addClass("hidescroll");
//         $('body').css('overflow','hidden');
//     });

//     $('.closemenu').click(function(){
//         $('.menusec').removeClass("slidemenu");
//         // $('.width2').removeClass("hidescroll");
//         $('body').css('overflow','inherit');
//     });

//     /**click event on body for closing navigation **/



//   //ipad and iphone fix
//   if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
//             $('.menusec').removeClass("slidemenu");
//             $('.width2').removeClass("hidescroll");
//             $('body').css('overflow','inherit'); 
//   }


//     setTimeout(function(){
//         $(".t-head").addClass("fade1");
//         $(".t-h-banner").css("transform","scale(1)");
//         $(".t-h-banner").css("opacity","1");
//     }, 1000);


//     setTimeout(function(){
//         $(".fade1").css("opacity","1");
//     }, 500);


//     setTimeout(function(){
//         $(".fade2").css("opacity","1");
//         $(".fade2").addClass("fadetext");
//     }, 5000);

//     setTimeout(function(){
//         $(".fade3").css("opacity","1");
//         $(".fade3").addClass("fadetext1");
//     }, 1200);


//     $(document).on('click', 'a[href^="#whatwedo"]', function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 1700);
//     });

//     $(document).on('click', 'a[href^="#products"]', function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 1700);
//     });


//     $(document).on('click', 'a[href^="#whoweare"]', function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 1700);
//     });

//     $(document).on('click', 'a[href^="#contact"]', function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 1700);
//     });

          
// });
        
// /** form validations */

// $(".nospace").keypress(function (e) {
//     var key = event.keyCode;
//     if (key === 32 && event.target.selectionStart === 0) {
//         event.preventDefault();
//     } else {

//     }
// });

// $(function () {
//     $('.floating-label input[type=email]').on('keypress', function (e) {
//         if (e.which == 32)
//             return false;
//     });
// });

// $(".nonumber").keydown(function (e) {
//     var key = e.keyCode;
//     if (key >= 48 && key <= 57) {
//         e.preventDefault();
//     }
// });

// $(".phone").keypress(function (e) {
//     //if the letter is not digit then display error and don't type anything
//     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
//         //display error message
//         return false;
//     }
// });

// $("#mobile").keyup(function (e) {
//     var phone = $("#mobile").val();
//     if (phone.length < 10) {
//         $(".phone1").fadeIn();
//     }
//     else if (phone.length = 10) {
//         $(".phone1").fadeOut();
//     }
// });


// $("#mobile1").keyup(function (e) {
//     var phone = $("#mobile1").val();
//     if (phone.length < 10) {
//         $(".phone2").fadeIn();
//     }
//     else if (phone.length = 10) {
//         $(".phone2").fadeOut();
//     }
// });



// $("#email").keyup(function (e) {
//     var email = $('#email').val();
//     var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
//     if ( !reg.test(email)) {
//         $(".emailalert").fadeIn();
//     }
//     else{
//         $(".emailalert").fadeOut();
//     }
// });

// $("#email1").keyup(function (e) {
//     var email = $('#email1').val();
//     var reg =  /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
//     if ( !reg.test(email)) {
//         $(".emailalert1").fadeIn();
//     }
//     else{
//         $(".emailalert1").fadeOut();
//     }
// });


// function isValidEmailAddress(emailAddress) {
//     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//     return pattern.test(emailAddress);
// }

// $("#contactform1 input  , #contactform1 textarea").keyup(function () {
//     console.log("form change called")
//     var name = $("#name").val();
//     var email = $("#email").val()
//     var mobile = $("#mobile").val()
//     var cname = $("#cname").val()
//     var message = $("#message").val()
//     var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
 
//     console.log(name, email, mobile, cname, message)
//     if (name != '' && email != '' && mobile != '' && cname != '' && message != '' && isValidEmailAddress(email) &&  mobile.length > 9 && reg.test(email)) {
//         console.log("HEllo from remove disable")
//         $('#submit').prop("disabled", false);
//     }
//     else{
//         $('#submit').prop("disabled", true);
//     }
// });

// $("#contactform2 input  , #contactform2 textarea").keyup(function () {
//     console.log("form change called")
//     var name = $("#name1").val();
//     var email = $("#email1").val()
//     var mobile = $("#mobile1").val()
//     var cname = $("#cname1").val()
//     var message = $("#message1").val()
//     var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
 
//     console.log(name, email, mobile, cname, message)
//     if (name != '' && email != '' && mobile != '' && cname != '' && message != '' && isValidEmailAddress(email) &&  mobile.length > 9 && reg.test(email)) {
//         console.log("HEllo from remove disable")
//         $('#submit2').prop("disabled", false);
//     }
//     else{
//         $('#submit2').prop("disabled", true);
//     }
// });



// $("#submit").click(function (e) {
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var mobile = $("#mobile").val();
//     var companyName = $("#cname").val();
//     var message = $("#message").val();

//     var dataString = { "subject": "Tresm Labs Contact Info", "name": name, "email": email, "mobileNumber": mobile, "companyName": companyName, "message": message }
//     $.ajax({
//         type: "POST",
//         url: "https://staging.botjet.ai/public/requestaccess",
//         data: dataString,
//         success: function () {
//             console.log(dataString);
//             $("#contactform1")[0].reset();
//             $('#myModal1').modal('hide');
//             setTimeout(function() {$('#tymsg').modal('show');}, 1000); // milliseconds  
//             setTimeout(function() {$('#tymsg').modal('hide');}, 7000); // milliseconds
//         }
//     });
//     return false;
// });



// $("#submit2").click(function (e) {
//     var name = $("#name1").val();
//     var email = $("#email1").val();
//     var mobile = $("#mobile1").val();
//     var companyName = $("#cname1").val();
//     var message = $("#message1").val();

//     var dataString = { "subject": "Let's work together", "name": name, "email": email, "mobileNumber": mobile, "companyName": companyName, "useCase": message }
//     $.ajax({
//         type: "POST",
//         url: "https://staging.botjet.ai/public/requestaccess",
//         data: dataString,
//         success: function () {
//             console.log(dataString);
//             $("#contactform2")[0].reset();
//             $('#myModal2').modal('hide');
//             setTimeout(function() {$('#tymsg').modal('show');}, 1000); // milliseconds  
//             setTimeout(function() {$('#tymsg').modal('hide');}, 7000); // milliseconds
//         }
//     });
//     return false;
// });


// $('.close').click(function () {
//     $("#phone1").hide();
//     $("#phone2").hide();
//     $("#contactform1")[0].reset();
//     $("#contactform2")[0].reset();
//     $('#submit').attr("disabled", true);
//     $('#submit2').attr("disabled", true);
//     $(".emailalert").hide();
//     $(".emailalert1").hide();
// });

// document.addEventListener('click', function (e) {
//     var $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("cform")) {
//         $("#phone1").hide();
//         $("#phone2").hide();
//         $("#contactform1")[0].reset();
//         $("#contactform2")[0].reset();
//         $('#submit').attr("disabled", true);
//         $('#submit2').attr("disabled", true);
//         $(".emailalert").hide();
//         $(".emailalert1").hide();
//     }
//   });



//   $(document).ready(function(){
//     $('.fa-chevron-circle-up').click(function(){
//        $('html, body').animate({scrollTop:0}, 'slow');
//    });
//    $('.start').click(function(){
//     $('.s1').text("Start your AI journey");
//     });
//     $('.t1').click(function(){
//         $('.s1').text("Send us a request");
//     });
 
// });

// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         $('.fa-chevron-circle-up').fadeIn();
//     } else {
//         $('.fa-chevron-circle-up').fadeOut();
//     }
// }


// $('.video-btn').click(function () {
//     setTimeout(function(){
//        $(".videobg").css("opacity","0");
//        $(".videobg").css("z-index","0");
//       }, 2000);
//       setTimeout(function(){
//         $("#video1")[0].play();
//     }, 3000);
//     //   var vid = document.getElementById("video1");
//     //   vid.currentTime = 0;
// });


// document.addEventListener('click', function (e) {
//     var $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("hidevideomodal")) {
//         $(".videobg").css("opacity","1");
//         $(".videobg").css("z-index","1");
//         setTimeout(function(){
//             $("#video1")[0].pause();
//         }, 1000);
//         var vid = document.getElementById("video1");
//         vid.currentTime = 0;
//     }
// });  



// $('closemodal').click(function () {
//     var vid = document.getElementById("video1");
//     vid.currentTime = 0;
//         $(".videobg").css("opacity","1");
//         $(".videobg").css("z-index","1");
//                 setTimeout(function(){
//             $("#video1")[0].pause();
//         }, 1000);
// });    


// /** image animations */


// $(window).scroll(function () {
//     $('.slide1').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  > imagePos ) {
//         $(".h-sec4 .dashboard").css("right","-223px");
//         }
//     }); 
//     $('.slide2').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  > imagePos ) {
//         $(".slidei1 figure").css("left","-93px");
//         $(".scale1").addClass("scaleimg");
//         }
//     }); 

//     $('.scaleimganim').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  > imagePos ) {
//         $(".scale2").addClass("scaleimg");
//         }
//     }); 
//     $('.slide3').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  > imagePos ) {
//         $(".slidei2 figure").css("left","-93px");
//         }
//     }); 

//     $('.slide4').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  > imagePos ) {
//         $(".slidei3 figure").css("left","-190px");
//         }
//     }); 

//     $('#whatwedo').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  >= imagePos ) {
//            $(".a1").addClass("active");
//         }
//         else{
//             $(".a1").removeClass("active");
//         }
//     }); 
//     $('#products').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  >= imagePos ) {
//            $(".a1").removeClass("active");
//            $(".a2").addClass("active");
//         }
//         else{
//             $(".a2").removeClass("active");
//         }
//     }); 
//     $('.slide3').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  >= imagePos ) {
//             $(".a2").removeClass("active");
//            $(".a3").addClass("active");
//         }
//         else{
//             $(".a3").removeClass("active");
//         }
//     }); 

//     $('#contactactive').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  >= imagePos ) {
//             $(".a3").removeClass("active");
//            $(".a4").addClass("active");
//         }
//         else{
//             $(".a4").removeClass("active");
//         }
//     }); 

//     $('.animblock2').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  > imagePos ) {
//             $(".anim2").addClass("scaleimg");
//         }
      
//     }); 
//     $('.animblock3').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  > imagePos ) {
//             $(".anim3").addClass("scaleimg");
//         }
      
//     }); 
// });    

    
// $(window).scroll(function () {  
// if (window.matchMedia('(max-width: 1700px)').matches) {

//     $('.slide1').each( function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if ( topOfWindow  > imagePos ) {
//         $(".h-sec4 .dashboard").css("right","-400px");
//         }
//     }); 
    

// }

// if (window.matchMedia('(max-width: 767px)').matches) {

    
// $('.a1,.a2,.a3,.a4').removeClass('active');
// $('.dropnav a').click(function () {
//     $(".dropnav a").removeClass('active');
//     $(this).addClass('active');
// });
// $('.removeactive-logo').click(function () {
//     $(".dropnav a").removeClass('active');
// });
// }
// });    


