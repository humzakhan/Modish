$(function () {
    // Sidebar items toggle
    // -----------------------------------------------------------------

    $('.navigation').find('li').has('ul').children('a').addClass('has-ul');

    $('.navigation').find('li').not('.active').has('ul').children('ul').addClass('hidden-ul');
    $('.navigation').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();
        $(this).parent('li').not('.disabled').toggleClass('active').children('ul').slideToggle(250);
    });

    // Sidebar Toggle
    // ------------------------------------------------------------------

    $('#toggle-sidebar').click(function() {
        $('.sidebar').slideToggle('slow');
    });

    $('#toggle-sidebar-desktop').click(function() {
        $('.sidebar').animate({width:'toggle'},250);
    });

    // Tabs
    // ------------------------------------------------------------------

    $('.nav-tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
});