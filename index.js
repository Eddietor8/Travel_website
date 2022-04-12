

$(document).ready(function() {

  var windowHeight = $(window).height();
  var windowScroll = $(window).scrollTop();
  var windowSrollPos = windowHeight + windowScroll;

  $.fn.revealOnScroll = function(direction) {

    return this.each(function() {

      var objetcOffset = $(this).offset();
      var objectOffsetTop = objetcOffset.top;


      if (!$(this).hasClass("hidden")) {

        if (direction == "right") {

          $(this).css({
            "opacity": 0,
            "right": "700px",
             'position': 'relative'
          });

        } else {
          $(this).css({
            "opacity": 0,
            "right": "-700px",
             'position': 'relative'
          });

        }

        $(this).css("opacity", 0).addClass("hidden");
      }


      if (!$(this).hasClass("animation-over")) {
        if (windowSrollPos > objectOffsetTop) {
          $(this).animate({
            "opacity": 1,
            "right": 0
          }, 1000).addClass("animation-over");
        }
      }

    });


  } //end our function here




  $(window).scroll(function() {

    windowHeight = $(window).height();
    windowScroll = $(window).scrollTop();
    windowSrollPos = windowHeight + windowScroll;

    

    $(".mountain").revealOnScroll("right");
    $(".bear").revealOnScroll("left");




  });
});
