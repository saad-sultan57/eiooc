$(document).ready(function () {
  // Initialize carousels
  const carousels = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: { 0: { items: 1 }, 500: { items: 1 }, 1000: { items: 1 } },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });

  // Set up tab click events
  $(".nav-button").click(function() {
    const category = $(this).data("category");
    showCarousel(category);
    updateActiveTab(this);
  });

  // Load 'healthy' images by default
  showCarousel("healthy");
  updateActiveTab($(".nav-button[data-category='healthy']")[0]);

  function showCarousel(category) {
    $(".owl-carousel").hide();
    $(`#${category}-carousel`).show();
    carousels.trigger('refresh.owl.carousel');
  }

  function updateActiveTab(button) {
    $(".nav-button").removeClass("bg-olive-green text-white");
    $(button).addClass("bg-olive-green text-white");
  }

  $(".owl-prev").click(function() {
    const visibleCarousel = $(".owl-carousel:visible");
    visibleCarousel.trigger("prev.owl.carousel");
  });

  $(".owl-next").click(function() {
    const visibleCarousel = $(".owl-carousel:visible");
    visibleCarousel.trigger("next.owl.carousel");
  });

  $(window).scroll(function() {
    alert("scroll");
  });
  
});

// Load the YouTube API
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var isMuted = true;

// Function to create YouTube player
function onYouTubeIframeAPIReady() {
  player = new YT.Player("myVideo", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Function to play video
function onPlayerReady(event) {
  document
    .getElementById("myModal")
    .addEventListener("shown.bs.modal", function () {
      event.target.playVideo();
    });

  // Add click event listener to mute toggle button
  document.getElementById("muteToggle").addEventListener("click", function () {
    if (isMuted) {
      player.unMute();
      player.setVolume(100);
      this.innerHTML = '<i class="fas fa-microphone"></i>';
    } else {
      player.mute();
      this.innerHTML = '<i class="fas fa-microphone-slash"></i>';
    }
    isMuted = !isMuted;
  });
}

// Function to stop and mute the video
function stopVideo() {
  if (player && typeof player.stopVideo === "function") {
    player.stopVideo();
    player.mute();
    isMuted = true;
    document.getElementById("muteToggle").innerHTML =
      '<i class="fas fa-microphone-slash"></i>';
      }
}

// Add event listener to stop video when modal is hidden
document
  .getElementById("myModal")
  .addEventListener("hidden.bs.modal", stopVideo);
