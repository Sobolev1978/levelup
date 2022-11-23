$(".reviews-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  navText: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    500: {
      items: 2,
      nav: true,
    },

    800: {
      items: 2,
      nav: true,
    },
    1200: {
      items: 3,
      nav: true,
    },
  },
})

$(document).ready(function () {
  $(".scroll").click(function (event) {
    event.preventDefault()
    var id = $(this).attr("href"),
      top = $(id).offset().top - 60
    $("body,html").animate(
      {
        scrollTop: top,
      },
      1500
    )
  })
})
