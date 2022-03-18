
$(document).ready(function(){ 
        $('#carosel1').carousel({
            interval: 25000
        });
        $('#myCarousel').carousel({
            interval: false
        });
        $('#m-fe').carousel({
            interval: false
        });
});

    $(window).scroll(function () {
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 1) sticky.addClass('fixedbg');
        else sticky.removeClass('fixedbg');
    });

    
$(document).ready(function(){ 

    $(document).on('click', 'a[href^="#platform"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1700);
    });

    $(document).on('click', 'a[href^="#technologies"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1700);
    });

    $(document).on('click', 'a[href^="#usecases"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1700);
    });

    $(document).on('click', 'a[href^="#about"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1700);
    });

    $(document).on('click', 'a[href^="#integrations"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1700);
    });

    $(".d2 .s2 a").click(function() {
        $(".d2 .o2 ul").slideToggle();
    });
    
    //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".d2 .o2 ul li a").click(function() {
    var text = $(this).html();
    $(".d2 .s2 a span").html(text);
    $(".d2 .o2 ul").hide();
}); 


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("d2"))
        $(".d2 .o2 ul").hide();
});


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

$(".nonumber").keydown(function (e) {
    var key = e.keyCode;
    if (key >= 48 && key <= 57) {
        e.preventDefault();
    }
});

$(".phone").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        return false;
    }
});

$(".phone").keyup(function (e) {
    var phone = $(".phone").val();
    if (phone.length < 10) {
        $(".phone1").fadeIn();
    }
    else if (phone.length = 10) {
        $(".phone1").fadeOut();
    }
});

$(".cphone").keyup(function (e) {
    var phone = $(this).val();
    if (phone.length < 10) {
        $(".phone2").fadeIn();
    }
    else if (phone.length = 10) {
        $(".phone2").fadeOut();
    }
});

$("#mobile1").keyup(function (e) {
    var phone = $(this).val();
    if (phone.length < 10) {
        $(".phone3").fadeIn();
    }
    else if (phone.length = 10) {
        $(".phone3").fadeOut();
    }
});

$("#email").keyup(function (e) {
    var email = $('#email').val();
    var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
    if ( !reg.test(email)) {
        $(".emailalert").fadeIn();
    }
    else{
        $(".emailalert").fadeOut();
    }
});


$("#r-email").keyup(function (e) {
    var email = $('#r-email').val();
    var reg =  /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
    if ( !reg.test(email)) {
        $(".emailalert2").fadeIn();
    }
    else{
        $(".emailalert2").fadeOut();
    }
    });
    

$("#website1").keyup(function (e) {
    var website1 = $('#website1').val();
    // var reg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if(!isUrlValid(website1)) {
        $(".walert").fadeIn();
    } else {
        $(".walert").fadeOut();
    }  
});

function isUrlValid(userInput) { var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g); if(res == null) return false; else return true; }


$(".cphone").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        return false;
    }
});

/** alert validations  */

$("#fname").keyup(function (e) {
        var fname = $('#fname').val();
        if (fname == '') {$(".falert").fadeIn();}
        else{$(".falert").fadeOut();}
    });
    
    $("#lname").keyup(function (e) {
        var lname = $('#lname').val();
        if (lname == '') {$(".lalert").fadeIn();}
        else{$(".lalert").fadeOut();}
    });
    
    // $("#r-phone").keyup(function (e) {
    //     var pname = $('#r-phone').val();
    //     if (pname == '') {
    //         $(".palert").fadeIn();
    //         $(".phone2").fadeOut();
    //     }
    //     else{$(".palert").fadeOut(); }
    // });
    
    $("#r-cname").keyup(function (e) {
        var rcname = $('#r-cname').val();
        if (rcname == '') {$(".calert").fadeIn();}
        else{$(".calert").fadeOut();}
    });
    
    $("#r-email").keyup(function (e) {
        var remail = $('#r-email').val();
        if (remail == '') {$(".ealert").fadeIn();}
        else{$(".ealert").fadeOut();}
    });
    
    $(".selectcountry select").click(function(){
        if($(this).val() == ""){ $(".conalert").fadeIn();}
        else{ $(".conalert").fadeOut();}
    });
    
    $(".selectbot select").click(function(){
        if($(this).val() == ""){ $(".botalert").fadeIn();}
        else{ $(".botalert").fadeOut();}
    });
    

$('.modal-body').click(function () {
    event.stopPropagation();
});

$('.close').click(function () {
    $(".phone1").hide();
    $(".phone2").hide();
    $("#contactform1")[0].reset();
    $(".removelabel").removeClass("show");
    $('#submit').attr("disabled", true);
    $("#showThankYou,#showThankYou1, #showThankYou2,#showThankYou3,#showThankYou4,#showThankYou5").hide();
    $(".emailalert").hide();
    $(".emailalert2").hide();
    $(".walert").hide();
});



document.addEventListener('click', function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("form1")) {
        $("#contactform1")[0].reset();
        $(".phone1").hide();
        $('#submit').prop("disabled", true);
        $("#showThankYou").hide();
        // $(".removelabel").removeClass("show");
        $('#submit').prop("disabled", true);
        $(".emailalert").hide();
        $(".walert").hide();
    }
  });


$("#contactform1 input  , #contactform1 textarea").keyup(function () {
    console.log("form change called")
    var name = $("#name").val();
    var email = $("#email").val()
    var mobile = $("#mobile").val()
    var cname = $("#cname").val()
    var message = $("#message").val()
    var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
 
    console.log(name, email, mobile, cname, message)
    if (name != '' && email != '' && mobile != '' && cname != '' && message != '' && isValidEmailAddress(email) &&  mobile.length > 9 && reg.test(email)) {
        console.log("HEllo from remove disable")
        $('#submit').prop("disabled", false);
    }
    else{
        $('#submit').prop("disabled", true);
    }
});


$("#submit").click(function (e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var companyName = $("#cname").val();
    var message = $("#message").val();

    var dataString = { "subject": "Contact Info", "name": name, "email": email, "mobileNumber": mobile, "companyName": companyName, "message": message }
    $.ajax({
        type: "POST",
        url: "https://platform.botjet.ai/public/requestaccess",
        data: dataString,
        success: function () {
            console.log(dataString);
            $("#contactform2")[0].reset();
            $('#myModal').modal('hide');
            setTimeout(function() {$('#tymsg').modal('show');}, 1000); // milliseconds  
            setTimeout(function() {$('#tymsg').modal('hide');}, 7000); // milliseconds
        }
    });
    return false;

});


// $("#resource-form input").keyup(function () {
//     console.log("form change called")
//     var name = $("#name1").val();
//     var email = $("#email1").val()
//     var mobile = $("#mobile1").val()
//     var cname = $("#cname1").val()
//     console.log(name, email, mobile, cname)
//     if (name != '' && email != '' && mobile != '' && cname != '' &&  isValidEmailAddress(email) &&  mobile.length > 9) {
//         console.log("HEllo from remove disable")
//         $('#submit3').prop("disabled", false);
//     }
//     else{
//         $('#submit3').prop("disabled", true);
//     }
// });

$("#contactform2 input , #contactform2 select ,  #contactform2 textarea").bind("keyup change", function(e) {
    var fname = $("#fname").val();
    var lname =  $("#lname").val();
    var cname = $("#r-cname").val();
    var email =  $("#r-email").val();
    var phone =  $("#r-phone").val();
    var country =  $("#country").val();
    var botpurporse =  $("#botpurporse").val();
    var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
    
    var check1 = [];
    $('.check1 label :checkbox:checked').each(function(i){
        check1[i] = $(this).val();
    });
    var checkstring = check1.toString();
    
    var check2 = [];
    $('input[name=rad1]:checked').each(function(i){
        check2[i] = $(this).val();
    });
    var checkstring2 = check2.toString();
    
    
    var check3 = [];
    $('.check3 label :checkbox:checked').each(function(i){
        check3[i] = $(this).val();
    });
    var checkstring3 = check3.toString();
    
    var check4 = [];
    $('.check4 label :checkbox:checked').each(function(i){
        check4[i] = $(this).val();
    });
    var checkstring4 = check4.toString();
    
    var addMoreChannels = $(".cfpl").val(); 
    
    var check7 = [];
    $('input[name=rate1]:checked').each(function(i){
        check7[i] = $(this).val();
    });
    var checkstring7 = check7.toString();
    
    var implementbot =  $("#implementbot").val();
    
    var check5 = [];
    $('.check5 label :checkbox:checked').each(function(i){
        check5[i] = $(this).val();
    });
    var checkstring5 = check5.toString();
    
    var check6 = [];
    $('.check6 label :radio:checked').each(function(i){
        check6[i] = $(this).val();
    });
    var checkstring6 = check6.toString();
    
    var message = $(".msgtext").val();
    
    console.log(fname,lname,cname,email,phone,country,botpurporse,checkstring,checkstring2,checkstring3,checkstring4,addMoreChannels,checkstring7,implementbot,checkstring5,checkstring6,message);
    
    if (fname != '' && lname != '' && email != '' && cname != '' && phone != '' && country != '' && botpurporse != '' &&  reg.test(email) &&  phone.length > 9)
     {
    
        $('#submit2').prop("disabled", false);
    }
    else{
        $('#submit2').prop("disabled", true);
    }   
    
    });
    

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}



$(".otherschannel").click(function (e) {
    $(".channelfield1").toggle();
    $(".cfpl").focus();
	$(".cfpl").val('');
});


$("#submit2").click(function (e) {

var fname = $("#fname").val();
var lname =  $("#lname").val();
var cname = $("#r-cname").val();
var email =  $("#r-email").val();
var phone =  $("#r-phone").val();
var country =  $("#country").val();
var botpurporse =  $("#botpurporse").val();


var check1 = [];
$('.check1 label :checkbox:checked').each(function(i){
    check1[i] = $(this).val();
});
var checkstring = check1.toString();

var check2 = [];
$('input[name=rad1]:checked').each(function(i){
    check2[i] = $(this).val();
});
var checkstring2 = check2.toString();


var check3 = [];
$('.check3 label :checkbox:checked').each(function(i){
    check3[i] = $(this).val();
});
var checkstring3 = check3.toString();

var check4 = [];
$('.check4 label :checkbox:checked').each(function(i){
    check4[i] = $(this).val();
});
var checkstring4 = check4.toString();

var addMoreChannels = $(".cfpl").val(); 

var check7 = [];
$('input[name=rate1]:checked').each(function(i){
    check7[i] = $(this).val();
});
var checkstring7 = check7.toString();

var implementbot =  $("#implementbot").val();

var check5 = [];
$('.check5 label :checkbox:checked').each(function(i){
    check5[i] = $(this).val();
});
var checkstring5 = check5.toString();

var check6 = [];
$('.check6 label :radio:checked').each(function(i){
    check6[i] = $(this).val();
});
var checkstring6 = check6.toString();

var message = $(".msgtext").val();

var dataString = { "subject": "Request Demo", "firstName": fname, "lastName" : lname,  "mobileNumber" : phone , 
"companyName" : cname , "businessEmailAddress": email, "country": country, "whoIsTheBotFor": botpurporse, "estimatedUsers": checkstring , "decisionMakingProcess" : checkstring2, "useCases" : checkstring3,
 "channels" : checkstring4 , "addMoreChannels" : addMoreChannels,  "rating" : checkstring7 , "plan" : implementbot  , "benifits" : checkstring5 , "budgetAllocation" : checkstring6 , "message" : message
}


$.ajax({
    type: "POST",
    url: "https://platform.botjet.ai/public/requestaccess",
    data: dataString,   
    success: function () {
console.log(dataString);
        $(".removelabel").removeClass("show");

$(".check2 label").removeClass("active");
$(".check6 label").removeClass("active");
$("#contactform2")[0].reset();
$(".thankyou1").fadeIn();
$(".hideform").fadeOut();

$('html, body').animate({scrollTop:0}, 'slow');


setTimeout(function(){
            $(".thankyou1").fadeOut();
            $(".hideform").fadeIn();
}, 6000);
    }
});
return false;
});

    });
    
/**select option for bot jet partner */
    
$(function () {
    var onClass = "on";
    var showClass = "show";

    $("input, select")
        .bind("checkval", function () {
            var label = $(this).prev("label");

            if (this.value !== "")
                label.addClass(showClass);

            else
                label.removeClass(showClass);
        })
        .on("keyup", function () {
            $(this).trigger("checkval");
        })
        .on("focus", function () {
            $(this).prev("label").addClass(onClass);
        })
        .on("blur", function () {
            $(this).prev("label").removeClass(onClass);
        })
        .trigger("checkval");

    $("select")
        .on("change", function () {
            var $this = $(this);

            if ($this.val() == "")
                $this.addClass("watermark");

            else
                $this.removeClass("watermark");

            $this.trigger("checkval");
        })
        .change();
});



$(document).ready(function(){


    setTimeout(function(){$('.loader figure img').css('left','0%');
    $('.loader figure img').css('top','0%');
    },
    500);

    setTimeout(function(){$('.t-logo').css('height','100px');
    $('.t-logo').css('opacity','1');
    },
    1000);
    


    var num = 0;
		var script_ticker = setInterval(function(){
			console.log(num)
			if(num >= 0)
				$('.text-banner2').each(function(id, el){
					$(this).find('img').eq(num).addClass('show');
            });
            if(num == 8){
                $('.text-banner2 img:nth-child(1)').removeClass('show'); 
                $('.text-banner2 img:nth-child(2)').removeClass('show'); 
                $('.text-banner2 img:nth-child(3)').removeClass('show'); 
                $('.text-banner2 img:nth-child(4)').removeClass('show'); 
                $('.text-banner2 img:nth-child(5)').removeClass('show'); 
                $('.text-banner2 img:nth-child(6)').removeClass('show'); 
                $('.text-banner2 img:nth-child(7)').removeClass('show'); 
                $('.text-banner2 img:nth-child(8)').removeClass('show');
            }
			if((++num) > 8) {
                num = 0;
                $(this).find('img').eq(num).removeClass('show');
			}
        }, 2800);

        
    $("#carosel1").on('slide.bs.carousel', function () {
        $(".text-banner2 img").removeClass('show');
        num = 0;
    });

        $('.hvr-ripple-out').click(function () {
            $('.changetext1').text("Schedule a demo");
        });   
 
    
        $('.changetext').click(function () {
            $('.changetext1').text("Contact Us");
        });   

         
        $('.originaltext').click(function () {
            $('.changetext1').text("Schedule a demo");
        });  

    $(".bleft").click(function(){
        $(".text-banner2 img").removeClass('show');
        num = 0;
    });
    
    $(".bright").click(function(){
        $(".text-banner2 img").removeClass('show');
        num = 0;
    });


    /** active checkbox */

    
$('.check2 label').click(function () {
    $('.check2 label').removeClass("active");
    $(this).addClass("active");
    // console.log($(".check2 input:checked").val());
 }); 

 $('.check6 label').click(function () {
    $('.check6 label').removeClass("active");
    $(this).addClass("active");
    // console.log($(".check6 input:checked").val());
 }); 



    /** banner text animations */

        
    setTimeout(function(){$('.text-animate').css('margin-top','0px');},
    500);
    setTimeout(function(){$('.fadetext').fadeIn();},
    1000);


});


$(window).scroll( function(){
    $('.fadeanimblock1').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".slideinbottom1").animate({'position':'relative','top':'0px','opacity':'1'},1200);
            $(".slideleft").animate({'position':'relative','left':'0px','opacity':'1'},1200);
            $(".slideright").animate({'position':'relative','right':'0px','opacity':'1'},1200);
        }    
    });
    $('.fadeanimblock2').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".slideinbottom2").animate({'position':'relative','top':'0px','opacity':'1'},1000);
        }    
    });
    $('.fadeanimblock3').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".slideinbottom3").animate({'position':'relative','top':'0px','opacity':'1'},1000);
        }    
    });
    $('.fadeanimblock4').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".slideinbottom4").animate({'position':'relative','top':'0px','opacity':'1'},1000);
        }    
    });
    $('.fadeanimblock5').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
  
            $(".slideinbottom5").animate({'position':'relative','top':'0px','opacity':'1'},1000);
        }    
    });
    $('.fadeanimblock').each( function(i){
        
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
  
            $(".slideinbottom").animate({'position':'relative','top':'0px','opacity':'1'},1000);
        }    
    }); 

    $('.fadeanimblock7').each( function(i){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".text-animate1").css({'margin-top':'0px'},1000);
            $(".fadetext1").fadeIn(1500);
        }
    }); 

    $('.top').each( function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".fadeblock").css("opacity", 1 - $(window).scrollTop() / 4000);
        }
        else{
            $(".fadeblock").css("opacity", "1");
        }
    });

    $('.top1').each( function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".fadeblock1").css("opacity", 1 - $(window).scrollTop() / 2800);
        }
        else{
            $(".fadeblock1").css("opacity", "1");
        }
    });

    $('.top2').each( function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".fadeblock2").css("opacity", 1 - $(window).scrollTop() / 2000);
        }
        else{
            $(".fadeblock2").css("opacity", "1");
        }
    });

    $('.top3').each( function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".fadeblock3").css("opacity", 1 - $(window).scrollTop() / 5000);
        }
        else{
            $(".fadeblock3").css("opacity", "1");
        }
    });


    $('.top4').each( function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if ( topOfWindow  > imagePos ) {
            $(".fadeblock4").css("opacity", 1 - $(window).scrollTop() / 5000);
        }
        else{
            $(".fadeblock4").css("opacity", "1");
        }
    });


});




$(document).ready(function(){
    $('.scrolltop').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });
    $('.fa-angle-double-up').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
   });
   
//TOGGLING NESTED ul
$(".d1").click(function() {
    $(".o1").slideToggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".o1 ul li a").click(function() {
    var text = $(this).html();
    $(".d1 a span").html(text);
    console.log(text);
    $(".o1").hide();
    removeattribute();
}); 
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('.fa-angle-double-up').fadeIn();
    } else {
        $('.fa-angle-double-up').fadeOut();
    }
}


if (window.matchMedia('(max-width: 767px)').matches) {
    $('#myCarousel').carousel({
        interval: false
    });
    $('#myCarousel2').carousel({
        interval: false
    });

    $('.menu').click(function () {
        // event.preventDefault();
        // event.stopPropagation();
        $(".fixednav").toggleClass('slide');
        $("body").addClass("hidescroll");
        $(".arrowup").css("z-index","-1");
    });

    $('.dropnav a ').click(function () {
        $(".fixednav").toggleClass('slide');
        $("body").removeClass("hidescroll");
        $(".arrowup").css("z-index","1");
    });
    $('.closebtn').click(function () {
        $(".fixednav").removeClass('slide');
        $("body").removeClass("hidescroll");
        $(".arrowup").css("z-index","1");
    });


    // $('.dropnav').click(function () {
    //     event.stopPropagation();
    // });

    $('#bannercarosel').carousel({
        interval: 3000,
        cycle: true
    });

    $('.showmodal').click(function () {
       $('#myModal').modal();
    }); 

    $('.showmodal1').click(function () {
        $('#myModal1').modal();
     }); 



}

/** for mac **/

if(navigator.userAgent.indexOf('Mac') > 0) {
    $('.banner-link a','.common-link a').css('line-height','2.11');
}

