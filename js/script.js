(function() {
  var scrollTop = '#scroll-to-top';

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(scrollTop).fadeIn(500);
    } else {
      $(scrollTop).fadeOut(500);
    }
  });

  $(scrollTop).click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
})();