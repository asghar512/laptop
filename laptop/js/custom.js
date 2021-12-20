$(document).ready(function () {

    

    //pageload modal
    setTimeout(function () {
        $(".popup").fadeIn(1000);
        $('.overlay').fadeTo('slow', 0.8);
    }, 1000)
    $(".popupclose").click(function () {
        $(".popup").fadeOut(1000);
        $('.overlay').fadeOut(500);
    });
    $(".overlay").click(function () {
        $(".popup").fadeOut(1000);
        $('.overlay').fadeOut(500);
    });


    // bootstrap carousel plugin

    $('.carousel').carousel({

        interval: 4000,

        pause: ""

    });



    // Closes the Responsive Menu on Menu Item Click

    $('.navbar-collapse ul li a').click(function () {

        $('.navbar-toggle:visible').click();

    });


    //collapse plugin

    $('.collapseBtn').click(function (event) {

        if ($(this).parent().next("div.packgboxdetails").is(":hidden")) {

            $(this).parent().next("div.packgboxdetails").show();

            $(this).removeClass("arrow-up");

        } else {



            $(this).parent().next("div.packgboxdetails").hide();

            $(this).addClass("arrow-up");

        }

    });



    //total plugin

    // $('input:checkbox').on('change', function () {

    //     var sum = 0;

    //     $('.getprice').each(function () {

    //         if (this.checked) sum = sum + parseFloat($(this).val());

    //     });

    //     $('#total').text(sum)

    // }).trigger("change")



    // checked plugin

    $('input[type="checkbox"]').click(function () {

        var inputValue = $(this).attr("value");

        $("." + inputValue).toggle();

    });



    //navbar cross plugin

    $(".navbar-toggle").on("click", function () {

        $(this).toggleClass("active");

    });



    // counter plugin

    jQuery(document).ready(function ($) {

        $('.counter').counterUp({

            delay: 10,

            time: 1000

        });

    });



    //owl plugin

    $("#owl-demo1").owlCarousel({

        autoPlay: 3000,

        items: 6,

        itemsDesktop: [1199, 3],

        itemsDesktopSmall: [979, 3]

    });



    //owl plugin

    $("#owl-demo2").owlCarousel({

        autoPlay: 3000,

        items: 1

    });



    // jQuery for page scrolling feature - requires jQuery Easing plugin

    /*$(function() {*/

    $('a.page-scroll').bind('click', function (event) {

        var $anchor = $(this);

        $('html, body').stop().animate({

            scrollTop: $($anchor.attr('href')).offset().top

        }, 1500, 'easeInOutExpo');

        event.preventDefault();

    });

    /*});*/



    // jQuery for page scrolling active - position jQuery Easing plugin

    $('body').scrollspy({

        target: '.navbar-fixed-top',

        offset: 51

    });





    // jQuery for parallax scrolling plugin

    $('#sliderback').parallax({ imageSrc: 'images/sliderback.jpg' });



    //progress plugin

    $('.progressbar1').progressBar({

        shadow: false,

        percentage: true,

        animation: true,

        barColor: "#0088cc",



    });

    $('.progressbar2').progressBar({

        shadow: false,

        percentage: true,

        animation: true,

        barColor: "#0088cc",



    });

    $('.progressbar3').progressBar({

        shadow: false,

        percentage: true,

        animation: true,

        barColor: "#0088cc",



    });

    $('.progressbar4').progressBar({

        shadow: false,

        percentage: true,

        animation: true,

        barColor: "#0088cc",



    });



    //select2 filter dropdown menu plugin

    jQuery(document).ready(function ($) {

        $(".js-example-basic-single").select2();



        $(".js-example-basic-multiple").select2({

            placeholder: "Select a Group"

        });

    });





    //collapse active

    $('.panel-heading').click(function () {

        $('.panel-heading').each(function (index, element) {

            $(this).removeClass("active");

            $(this).children("img").attr("src", "images/acc-up.png");

        });

        $(this).addClass("active");

        $(this).children("img").attr("src", "images/acc-down.png");

    });









});











































