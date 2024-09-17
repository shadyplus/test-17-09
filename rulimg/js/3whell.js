var resultWrapper = document.querySelector(".overlay");
var wheel = document.querySelector(".prize-wheel");
var cursorText = document.querySelector(".wheel__cursor-text");
var hand = document.querySelector(".hand-hidden");
var oldPrice = document.querySelector(".old-price");
var discount = document.querySelector(".discount");
var fiveMinutes = 60 * 10;
var display = document.querySelector("#timer");
$(".wheel__cursor, .btn-wheel").click(function () {
  startTimer(fiveMinutes, display);
  scrollToWheel();
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("spin");
    hand.style.display = "none";
    setTimeout(function () {
      resultWrapper.style.display = "block";
      cursorText.innerHTML = "- 50%";
      startConfetti();
    }, 8000);
    wheel.classList.add("rotated");
    $(".new-price").slideUp();
    $(".discount").slideUp();
  }
});
$(".btn--submit").click(function () {
  resultWrapper.style.display = "none";
  $(".wheel__content-inner").slideUp(),
    $(".form").slideDown(),
    $(".bottom-teaser .sale").addClass("shown"),
    $(".form").addClass("shown__");
  startCounter();
  scrollToForm();
  setTimeout(function () {
    $(".discount").slideDown();
    discount.classList.add("blink");
  }, 2000);
  setInterval(function () {
    setTimeout(function () {
      oldPrice.classList.add("strike");
    }, 2000);
  }, 2000);
  setInterval(function () {
    $(".new-price").slideDown();
  }, 5000);
});
var flagTimer = 0;
function startTimer(duration, display) {
  if (flagTimer == 0) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
    flagTimer++;
  }
}
function scrollToWheel() {
  $("html, body").animate(
    { scrollTop: $(".injection").offset().top - 250 },
    700
  );
}
function scrollToForm() {
  $("html, body").animate({ scrollTop: $("#toform").offset().top }, 700);
}
$(document).ready(function () {
  var $wheelTop = $(".wheel-top");
  var $wheelElement = $(".wheel-element");
  var $commentElement = $(".comment");
  let counter = 0;
  let counter2 = 0;
  let btn = document.querySelector(".btn_wrap");
  var scroll10 = $(".scroll10");
  var scroll40 = $(".scroll40");
  var scroll80 = $(".scroll80");
  var scroll100 = $(".scroll100");
  let counterNotify = 0;
  let counterNotify1 = 0;
  let counterNotify2 = 0;
  let counterNotify3 = 0;
  var offset10 = scroll10.offset().top;
  var offset40 = scroll40.offset().top;
  var offset80 = scroll80.offset().top;
  var offset100 = scroll100.offset().top;
  var interval0 = 16000;
  var interval1 = 14000;
  var interval2 = 12000;
  var interval3 = 10000;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = $wheelTop.offset().top;
    var offset2 = $wheelElement.offset().top;
    var offset3 = $commentElement.offset().top;
    if (scroll > offset && counter == 0) {
      btn.classList.add("show");
      counter = 1;
    }
    if (scroll > offset2 && counter == 1) {
      btn.classList.remove("show");
      counter = 0;
    }
    if (scroll > offset3 && counter == 0) {
      btn.classList.add("show");
      counter = 1;
    }
    if (scroll > offset && counter2 == 0) {
      btn.classList.add("show");
      counter2 = 1;
    }
    if (scroll > offset10 && counterNotify == 0) {
      counterNotify = 1;
      scrollFlag = 10;
      startNotify();
      var intervalFunc0 = setInterval(function () {
        if (counterNotify1 == 1) {
          clearInterval(intervalFunc0);
          return;
        }
        n++;
        showNotify(notify);
        console.log(interval0);
        if (n == 29) {
          n = -1;
        }
      }, interval0);
    } else if (scroll > offset40 && counterNotify1 == 0) {
      counterNotify1 = 1;
      scrollFlag = 40;
      var intervalFunc1 = setInterval(function () {
        if (counterNotify2 == 1) {
          clearInterval(intervalFunc1);
          return;
        }
        n++;
        showNotify(notify);
        console.log(interval1);
        if (n == 29) {
          n = -1;
        }
      }, interval1);
    } else if (scroll > offset80 && counterNotify2 == 0) {
      counterNotify2 = 1;
      scrollFlag = 80;
      var intervalFunc2 = setInterval(function () {
        if (counterNotify3 == 1) {
          clearInterval(intervalFunc2);
          return;
        }
        n++;
        showNotify(notify);
        console.log(interval2);
        if (n == 29) {
          n = -1;
        }
      }, interval2);
    } else if (scroll > offset100 && counterNotify3 == 0) {
      counterNotify3 = 1;
      scrollFlag = 100;
      setInterval(function () {
        n++;
        showNotify(notify);
        console.log(interval3);
        if (n == 29) {
          n = -1;
        }
      }, interval3);
    }
  });
});
var flag = 0;
function startCounter() {
  if (flag == 0) {
    let packWrap = document.querySelector(".loader__element");
    setTimeout(function () {
      let countPack = document.querySelector(".count"),
        loaderLine = document.querySelector(".loader__element"),
        defaultNum = 18;
      perc = 40;
      var num = 0;
      function getRandomPack() {
        if (num < 2) {
          defaultNum = defaultNum - 1;
          loaderLine.style.width = perc + "%";
          countPack.innerHTML = defaultNum;
          perc = perc - 10;
          setTimeout(opacitylow, 0);
          setTimeout(opacityhigh, 400);
        } else if (3 < num < 6 && defaultNum != 6) {
          defaultNum = defaultNum - 1;
          countPack.innerHTML = defaultNum;
          loaderLine.style.width = perc + "%";
          perc = perc - 2;
          setTimeout(opacitylow, 0);
          setTimeout(opacityhigh, 400);
        }
        num++;
      }
      function opacitylow() {
        packWrap.style.opacity = "0.3";
      }
      function opacityhigh() {
        packWrap.style.opacity = "1";
      }
      (function loop() {
        const interval = [6000, 8000, 12000];
        var rand = Math.floor(Math.random() * interval.length);
        let randomIntervalNum = interval[rand];
        setTimeout(function () {
          getRandomPack();
          loop();
        }, randomIntervalNum);
      })();
    }, 1000);
    flag++;
  }
}
function startConfetti() {
  (function () {
    var canvas;
    var ctx;
    var W;
    var H;
    var mp = 150;
    var particles = [];
    var angle = 0;
    var tiltAngle = 0;
    var confettiActive = true;
    var animationComplete = true;
    var deactivationTimerHandler;
    var reactivationTimerHandler;
    var animationHandler;
    var particleColors = {
      colorOptions: [
        "DodgerBlue",
        "OliveDrab",
        "Gold",
        "pink",
        "SlateBlue",
        "lightblue",
        "Violet",
        "PaleGreen",
        "SteelBlue",
        "SandyBrown",
        "Chocolate",
        "Crimson",
      ],
      colorIndex: 0,
      colorIncrementer: 0,
      colorThreshold: 10,
      getColor: function () {
        if (this.colorIncrementer >= 10) {
          this.colorIncrementer = 0;
          this.colorIndex++;
          if (this.colorIndex >= this.colorOptions.length) {
            this.colorIndex = 0;
          }
        }
        this.colorIncrementer++;
        return this.colorOptions[this.colorIndex];
      },
    };
    function confettiParticle(color) {
      this.x = Math.random() * W;
      this.y = Math.random() * H - H;
      this.r = RandomFromTo(10, 30);
      this.d = Math.random() * mp + 10;
      this.color = color;
      this.tilt = Math.floor(Math.random() * 10) - 10;
      this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
      this.tiltAngle = 0;
      this.draw = function () {
        ctx.beginPath();
        ctx.lineWidth = this.r / 2;
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.x + this.tilt + this.r / 4, this.y);
        ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4);
        return ctx.stroke();
      };
    }
    $(document).ready(function () {
      SetGlobals();
      InitializeButton();
      InitializeConfetti();
      $(window).resize(function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
      });
    });
    function InitializeButton() {
      $("#stopButton").click(DeactivateConfetti);
      $("#startButton").click(RestartConfetti);
    }
    function SetGlobals() {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    }
    function InitializeConfetti() {
      particles = [];
      animationComplete = false;
      for (var i = 0; i < mp; i++) {
        var particleColor = particleColors.getColor();
        particles.push(new confettiParticle(particleColor));
      }
      StartConfetti();
    }
    function Draw() {
      ctx.clearRect(0, 0, W, H);
      var results = [];
      for (var i = 0; i < mp; i++) {
        (function (j) {
          results.push(particles[j].draw());
        })(i);
      }
      Update();
      return results;
    }
    function RandomFromTo(from, to) {
      return Math.floor(Math.random() * (to - from + 1) + from);
    }
    function Update() {
      var remainingFlakes = 0;
      var particle;
      angle += 0.01;
      tiltAngle += 0.1;
      for (var i = 0; i < mp; i++) {
        particle = particles[i];
        if (animationComplete) return;
        if (!confettiActive && particle.y < -15) {
          particle.y = H + 100;
          continue;
        }
        stepParticle(particle, i);
        if (particle.y <= H) {
          remainingFlakes++;
        }
        CheckForReposition(particle, i);
      }
      if (remainingFlakes === 0) {
        StopConfetti();
      }
    }
    function CheckForReposition(particle, index) {
      if (
        (particle.x > W + 20 || particle.x < -20 || particle.y > H) &&
        confettiActive
      ) {
        if (index % 5 > 0 || index % 2 == 0) {
          repositionParticle(
            particle,
            Math.random() * W,
            -10,
            Math.floor(Math.random() * 10) - 20
          );
        } else {
          if (Math.sin(angle) > 0) {
            repositionParticle(
              particle,
              -20,
              Math.random() * H,
              Math.floor(Math.random() * 10) - 20
            );
          } else {
            repositionParticle(
              particle,
              W + 20,
              Math.random() * H,
              Math.floor(Math.random() * 10) - 20
            );
          }
        }
      }
    }
    function stepParticle(particle, particleIndex) {
      particle.tiltAngle += particle.tiltAngleIncremental;
      particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
      particle.x += Math.sin(angle);
      particle.tilt = Math.sin(particle.tiltAngle - particleIndex / 3) * 15;
    }
    function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
      particle.x = xCoordinate;
      particle.y = yCoordinate;
      particle.tilt = tilt;
    }
    function StartConfetti() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      (function animloop() {
        if (animationComplete) return null;
        animationHandler = requestAnimFrame(animloop);
        return Draw();
      })();
    }
    function ClearTimers() {
      clearTimeout(reactivationTimerHandler);
      clearTimeout(animationHandler);
    }
    function DeactivateConfetti() {
      confettiActive = false;
      ClearTimers();
    }
    function StopConfetti() {
      animationComplete = true;
      if (ctx == undefined) return;
      ctx.clearRect(0, 0, W, H);
    }
    function RestartConfetti() {
      ClearTimers();
      StopConfetti();
      reactivationTimerHandler = setTimeout(function () {
        confettiActive = true;
        animationComplete = false;
        InitializeConfetti();
      }, 100);
    }
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
  })();
}
