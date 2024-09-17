"use strict";

$(document).ready(function () {
  
  $(document).ready(function () {
    $('.before-after__wrap').each(function () {
      var cur = $(this); // Adjust the slider
      var width = cur.width() + 'px';
      cur.find('.after img').css('width', width);
      drags(cur.find('.handle'), cur.find('.after'), cur);
    });
  });

  $(window).resize(function () {
    $('.before-after__wrap').each(function () {
      var cur = $(this);
      var width = cur.width() + 'px';
      cur.find('.after img').css('width', width);
    });
  });

  function drags(dragElement, resizeElement, container) {

    dragElement.on('mousedown touchstart', function (e) {
      dragElement.addClass('draggable');
      resizeElement.addClass('resizable');

      var startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX; 
      var dragWidth = dragElement.outerWidth(),
          posX = dragElement.offset().left + dragWidth - startX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth();

      var minLeft = containerOffset + 10;
      var maxLeft = containerOffset + containerWidth - dragWidth - 10;

      dragElement.parents().on("mousemove touchmove", function (e) {
        
        var moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        var leftValue = moveX + posX - dragWidth; 

        if (leftValue < minLeft) {
          leftValue = minLeft;
        } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
        }

        var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

        $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
          $(this).removeClass('draggable');
          resizeElement.removeClass('resizable');
        });
        $('.resizable').css('width', widthValue);
      }).on('mouseup touchend touchcancel', function () {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      e.preventDefault();
    }).on('mouseup touchend touchcancel', function (e) {
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
  } 

  var counter = 1;
  var resultWrapper = document.querySelector('.overlay');
  var wheel = document.querySelector('.wheel__prize');

  $('.wheel__cursor').click(function () {
    if (!wheel.classList.contains('rotated')) {
      wheel.classList.add('spin');
      setTimeout(function () {
        resultWrapper.style.display = "block";
      }, 8000);
      wheel.classList.add('rotated');
    }
  });

  var hours, minutes, seconds;
  var target_date = new Date().getTime() + (170*3600);
  var countdown = document.querySelectorAll(".timer");
   
  function getCountdown() {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
  
    seconds_left = seconds_left % 86400;
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
            
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );
    
    for(var i = 0; i < countdown.length; i++) {
      countdown[i].innerHTML = "<span>" + seconds + "</span><span>:</span><span>" + minutes + "</span><span>:</span><span>" + hours + "</span>";
    }
  }
   
  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  $('.btn-popup').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeOut();
    counter = 2;
    $('.wheel__container').slideUp();
    $('.wheel__order').slideDown();
    $(".bottom__product-pic .sale").addClass("shown");
    getCountdown();
    setInterval(function() { 
      getCountdown(); 
    }, 1000);
  });

  $('a').click(function(evt) {
    evt.preventDefault();
    $("html,body").animate({scrollTop: $('.scroll').offset().top - 40}, 1000);
  });

});

var xhr = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function () {
  var sliderLpt = document.querySelectorAll('.before-after');
  var sliderBTN = document.querySelectorAll('.btn.btn--thin');

  for (var i = 0; i < sliderLpt.length; i++) {
    var sliderLink = sliderLpt[i];

    sliderLink.addEventListener('click', function(e) {
      var href6 = e.currentTarget.dataset.link;
    });
  }

  for (var i = 0; i < sliderBTN.length; i++) {
    var sliderTriger = sliderBTN[i];

    sliderTriger.addEventListener('click', function(e) {
      var href7 = e.currentTarget.dataset.link;
    });
  }

});

var btn = document.querySelectorAll('.btn--thin');
var currentSlide = localStorage.getItem('slide') || 0;
var lcs = parseInt(currentSlide);

btn.forEach(function ($this) {
  if (lcs !== 0) {
    var it = $this.offsetParent;
    it.classList.add('checked');
    lcs--;
  }
  

  $this.addEventListener('click', function (e) {
    var parent = e.target.closest('.slider__text').querySelectorAll('.slider__choice li input'),
    go = 0;
    parent.forEach(function (check) {
    go += check.checked;
    console.log(parent)
  });

  if (go !== 0) {
      currentSlide++;
      localStorage.setItem('slide', currentSlide);
      var item = e.target.closest('.slider__item');
      item.classList.add('checked');
    }
  });

});
