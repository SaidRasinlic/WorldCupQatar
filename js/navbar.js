/* eslint-env jquery */
$(document).click(function(event) {

 let clickover = $(event.target);
 let navbar = $('.navbar-collapse');
 let opened = navbar.hasClass("show");
 if (opened === true && !clickover.hasClass('navbar-toggler')) {
  navbar.collapse('hide');
 }
});

$('.navbar').click(function(e) {
 e.stopPropagation();
})