$(document).ready(function () {
  const owl = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: { 0: { items: 2 }, 500: { items: 2 }, 1000: { items: 2 } },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 2,
  });

  $(".owl-prev").click(() => owl.trigger("prev.owl.carousel"));
  $(".owl-next").click(() => owl.trigger("next.owl.carousel"));

  // Load 'healthy' images by default
  loadImages("healthy", $(".nav-button").first()[0]);
});

const images = {
  healthy: [
    "assets/images/EIOOC Awards PNG/EIOOC_Gold Award_Healthy-pdf.png",
    "assets/images/EIOOC Awards PNG/EIOOC_Silver Award_Healthy-pdf.png",
    "assets/images/AAIOOC Awards PNG/AAIOOC_Gold Award_Healthy-pdf.png",
    "assets/images/AAIOOC Awards PNG/AAIOOC_Silver Award_Healthy-pdf.png",
    "assets/images/SIOOC Awards PNG/SIOOC_Gold Award_Healthy.png",
    "assets/images/SIOOC Awards PNG/SIOOC_silver Award_Healthy.png",
    "assets/images/USIOOC Awards PNG/USIOOC awards-2023_Gold_Healthy.png",
    "assets/images/USIOOC Awards PNG/USIOOC awards-2023_Silver_Healthy-pdf.png",
  ],
  quality: [
    "assets/images/AAIOOC Awards PNG/AAIOOC_Silver Award_Quality-pdf.png",
    "assets/images/AAIOOC Awards PNG/AAIOOC_Silver Award_Quality-pdf.png",
    "assets/images/EIOOC Awards PNG/EIOOC_Silver Award_Quality-pdf.png",
    "assets/images/EIOOC Awards PNG/EIOOC_Gold Award_Quality-pdf.png",
    "assets/images/SIOOC Awards PNG/SIOOC_Gold Award_Quality.png",
    "assets/images/SIOOC Awards PNG/SIOOC_Silver Award_Quality.png",
    "assets/images/USIOOC Awards PNG/USIOOC awards-2023_Gold_Quality.png",
    "assets/images/USIOOC Awards PNG/USIOOC awards-2023_Silver_Quality-pdf.png",
     


  ],
  infused: [
    "assets/images/AAIOOC Awards PNG/AAIOOC_Silver Award_Infused-pdf.png",
    "assets/images/AAIOOC Awards PNG/AAIOOC_Gold Award_Infused-pdf.png",
    "assets/images/EIOOC Awards PNG/EIOOC_Silver Award_Infused-pdf.png",
    "assets/images/EIOOC Awards PNG/EIOOC_Gold Award_Infused-pdf.png",
    "assets/images/SIOOC Awards PNG/SIOOC_Gold Award_Infused.png",
    "assets/images/SIOOC Awards PNG/SIOOC_Silver Award_Infused.png",
    "assets/images/USIOOC Awards PNG/USIOOC awards-2023_Gold_Infused.png",
    "assets/images/USIOOC Awards PNG/USIOOC awards-2023_Silver_Infused-pdf.png",
  ],
};

function loadImages(category, btn) {
  // Update carousel images
  $("#awards-carousel")
    .empty()
    .append(
      images[category].map(
        (src) => `<div class="item d-flex justify-content-center align-ite"><img src="${src}" class="w-75"></div>`
      )
    );

  $(".owl-carousel")
    .owlCarousel("destroy")
    .owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: { 0: { items: 2 }, 500: { items: 2 }, 1000: { items: 2 } },
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      slideBy: 2,
    });

  // Remove active class from all buttons and add it to the clicked button
  $(".nav-button").removeClass("bg-olive-green text-white");
  $(btn).addClass("bg-olive-green text-white");
}
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
