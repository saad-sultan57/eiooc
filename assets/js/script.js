$(document).ready(function () {
  var owl = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false, // Disable default navigation
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
    // autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });

  // Custom button events
  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
