$(document).ready(function () {
  const owl = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: { 0: { items: 1 }, 500: { items: 1 }, 1000: { items: 2 } },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });

  $(".owl-prev").click(() => owl.trigger("prev.owl.carousel"));
  $(".owl-next").click(() => owl.trigger("next.owl.carousel"));

  // Select first button and load 'healthy' images by default
  const firstBtn = $(".nav-button").first();
  loadImages("healthy", firstBtn[0]);
});

const images = {
  healthy: ["assets/images/award1.png", "assets/images/award1.png"],
  quality: ["assets/images/award2.png", "assets/images/award2.png"],
  infused: ["assets/images/award1.png", "assets/images/award2.png"],
};

function loadImages(category, btn) {
  // Update carousel images
  $("#awards-carousel")
    .empty()
    .append(
      images[category].map(
        (src) => `<div class="item"><img src="${src}" class="w-75"></div>`
      )
    );

  $(".owl-carousel")
    .owlCarousel("destroy")
    .owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: { 0: { items: 1 }, 500: { items: 1 }, 1000: { items: 2 } },
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });

  $(".nav-button").removeClass("bg-olive-green text-white");
  $(btn).addClass("bg-olive-green text-white");
}
