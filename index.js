$(document).ready(function () {
  const navBar = $(".navbar");
  const logo = $("#logo");
  const img = $("#paralax-img");

  $(window).scroll(() => {
    if ($(window).scrollTop() > 90) {
      $(".navbar").addClass("fixed-nav");
      $(".navbar").css("position", "fixed");
      $(".top").css("visibility", "visible");
      $(".top").css("opacity", "1");
      $(logo).attr("src", "img/logo-black.png");
    } else {
      $(".navbar").removeClass("fixed-nav");
      $(".navbar").css("position", "absolute");
      $(logo).attr("src", "img/logo.png");
      $(".top").css("visibility", "hidden");
      $(".top").css("opacity", "0");
    }
    if ($(window).scrollTop() > 2225) {
      $(img).css("margin-top", -550 + ($(window).scrollTop() - 1225) * 0.3);
    }
  });

  //owl carousel
  $(".news").owlCarousel({
    margin: 20,
    responsiveClass: true,
    nav: true,
    rewind: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      425: {
        items: 3,
      },
    },
  });

  $(".feature").owlCarousel({
    items: 5,
    responsiveClass: true,
    rewind: true,
    autoplay: true,
    margin: 50,
    responsive: {
      0: {
        items: 2,
      },
      425: {
        items: 3,
      },
      426:{
        items: 5,
      }
    },
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    autoplay: true,
    autoplaytimeout: 100,
    nav: true,
    rewind: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 2,
      },
      650: {
        items: 3,
      },
      651: {
        items: 4,
      },
    },
  });
  //onClick scroll up
  $(".top").click(() => {
    document.documentElement.scrollTop = 0;
  });

  // counter up
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});
