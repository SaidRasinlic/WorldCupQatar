/* eslint-env jquery */
$(document).click((event) => {
  const clickover = $(event.target);
  const navbar = $('.navbar-collapse');
  const opened = navbar.hasClass('show');
  if (opened === true && !clickover.hasClass('navbar-toggler')) {
    navbar.collapse('hide');
  }
});

$('.navbar').click((e) => {
  e.stopPropagation();
});