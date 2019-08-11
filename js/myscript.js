
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
//////// Gallery - Portfolio ///////////////////////////////////////////
  // var gallery = document.querySelector('.gallery');
  // var galleryItems = document.querySelectorAll('.gallery-item');
  // var numOfItems = gallery.children.length;
  // var itemWidth = 23; // percent: as set in css
  
  // var featured = document.querySelector('.featured-item');
  
  // var leftBtn = document.querySelector('.move-btn.left');
  // var rightBtn = document.querySelector('.move-btn.right');
  // var leftInterval;
  // var rightInterval;
  
  // var scrollRate = 0.2;
  // var left;
  
  // function selectItem(e) {
  //   if (e.target.classList.contains('active')) return;
    
  //   featured.style.backgroundImage = e.target.style.backgroundImage;
    
  //   for (var i = 0; i < galleryItems.length; i++) {
  //     if (galleryItems[i].classList.contains('active'))
  //       galleryItems[i].classList.remove('active');
  //   }
    
  //   e.target.classList.add('active');
  // }
  
  // function galleryWrapLeft() {
  //   var first = gallery.children[0];
  //   gallery.removeChild(first);
  //   gallery.style.left = -itemWidth + '%';
  //   gallery.appendChild(first);
  //   gallery.style.left = '0%';
  // }
  
  // function galleryWrapRight() {
  //   var last = gallery.children[gallery.children.length - 1];
  //   gallery.removeChild(last);
  //   gallery.insertBefore(last, gallery.children[0]);
  //   gallery.style.left = '-23%';
  // }
  
  // function moveLeft() {
  //   left = left || 0;
  
  //   leftInterval = setInterval(function() {
  //     gallery.style.left = left + '%';
  
  //     if (left > -itemWidth) {
  //       left -= scrollRate;
  //     } else {
  //       left = 0;
  //       galleryWrapLeft();
  //     }
  //   }, 1);
  // }
  
  // function moveRight() {
  //   //Make sure there is element to the leftd
  //   if (left > -itemWidth && left < 0) {
  //     left = left  - itemWidth;
      
  //     var last = gallery.children[gallery.children.length - 1];
  //     gallery.removeChild(last);
  //     gallery.style.left = left + '%';
  //     gallery.insertBefore(last, gallery.children[0]);	
  //   }
    
  //   left = left || 0;
  
  //   leftInterval = setInterval(function() {
  //     gallery.style.left = left + '%';
  
  //     if (left < 0) {
  //       left += scrollRate;
  //     } else {
  //       left = -itemWidth;
  //       galleryWrapRight();
  //     }
  //   }, 1);
  // }
  
  // function stopMovement() {
  //   clearInterval(leftInterval);
  //   clearInterval(rightInterval);
  // }
  
  // leftBtn.addEventListener('mouseenter', moveLeft);
  // leftBtn.addEventListener('mouseleave', stopMovement);
  // rightBtn.addEventListener('mouseenter', moveRight);
  // rightBtn.addEventListener('mouseleave', stopMovement);
  
  
  // //Start this baby up
  // (function init() {
  //   var images = [
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/car.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/city.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/deer.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/flowers.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/food.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/guy.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/landscape.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/lips.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/night.jpg',
  //     'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/table.jpg'
  //   ];
    
  //   //Set Initial Featured Image
  //   featured.style.backgroundImage = 'url(' + images[0] + ')';
    
  //   //Set Images for Gallery and Add Event Listeners
  //   for (var i = 0; i < galleryItems.length; i++) {
  //     galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
  //     galleryItems[i].addEventListener('click', selectItem);
  //   }
  // })();
//////// Gallery - Portfolio /////////

})(jQuery);
$("#timeline-1").timeline();
$(window).load(function(){
  // Page Load Animate
  $('.contOut').animate({
    'opacity':'1'
  },500);
});
