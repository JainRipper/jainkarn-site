
(function() {

  "use strict";

  var topoffset = 50; //variable for menu height

  //----- Scrollspy Usage -----//
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  //Add 'inbody' when go to other sections except 'profile'
  // var hash = $(this).find('li.active a').attr('href');  //get href ID
  var hash = document.querySelector("li.active a").getAttribute("href");
  // add Class 'inbody' to nav except 'profile' section
  if(hash !== '#profile') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }

  //Add 'inbody' class to nav when Scrollspy event activates
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#profile') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  })
  //// Scrollspy Usage ////

  //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset+2
          }, 500);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling

//======================================================
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = ($(this).height() + $(this).offset().top);
        var that = $(this)
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
          selectors.item.last().addClass(selectors.activeClass)
        } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }

      });
    });

  }
})(jQuery);
$("#timeline-1").timeline();
$(window).load(function(){
  // Page Load Animate
  $('.contOut').animate({
    'opacity':'1'
  },1000);
});
