$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            // Show white nav
            $("nav").addClass("navbar-wh-bg");
        } else {
            $("nav").removeClass("navbar-wh-bg");
        }
    });
   
});
//Smooth Scrolling
$( function() {
    $("a.smooth-scroll").on('click', function(e) {
        e.preventDefault();
        var sectionId = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(sectionId).offset().top - 60,
        }, 1000);
    });

});