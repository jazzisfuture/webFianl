$(document).ready(function() {
    $('#navleft li').stop().mousemove(function() {
        $('ul', this).stop().slideDown(200);
    });
    $('#navleft li').stop().mouseleave(function() {
        $('ul', this).stop().slideUp(100);
    });
});
