//  ==================
//    Custom cursor
//  ==================
$(window).on("load resize", function () {
  if (window.innerWidth > 1200) {
    $(".catagoty-badge li,.blog-post").addClass("hover");
    const cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll(
      "a , input,textarea,button,.hover,label"
    );
    window.addEventListener("mousemove", (e) => {
      let leftPosition = e.pageX + 10;
      let topPosition = e.pageY + 9;
      cursor.style.left = leftPosition + "px";
      cursor.style.top = topPosition + "px";
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
      });
    });

    links.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
      });
    });
  }
});



//=========================
//  Header Sticky top
// ==========================

const showAnim = gsap.from('header', {
  yPercent: -100,
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});



//======================
// expiriance section
// =====================

if (window.innerWidth > 1200) {
  gsap.utils.toArray(".expirince-list li").forEach((box) => {

    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        markers: false,
        scrub: 2,
        toggleClass: "active",
        start: "0% 45%",
        end: "100% 50%",
      },

    });
  });

}

// =============
// brain Image
// =============

function BrainImage() {
  const doc = this.getSVGDocument();
  const brain = doc.querySelector("#brain");
  const topbrain = doc.querySelector("#topline");
  const bottombrain = doc.querySelector("#bottomline");
  const brainmaintop = doc.querySelector("#top-mainline");
  const outline = doc.querySelector("#outerline");

  const triggerselector = document.querySelector(".expirince");
  gsap.utils.toArray(topbrain).forEach((box) => {
    gsap.set(box, {
      strokeDasharray: 330,
      strokeDashoffset: 330,
      opacity: 0.3
    });
    gsap.to(box, {
      scrollTrigger: {
        trigger: triggerselector,
        markers: false,
        scrub: 4,
        start: "0% 50%",
        end: "30% 30%",
      },

      strokeDashoffset: 0,
    });
  });

  gsap.utils.toArray(brainmaintop).forEach((box) => {
    gsap.set(box, {
      strokeDasharray: 164,
      strokeDashoffset: 164,
      opacity: 0.3
    });
    gsap.to(box, {
      scrollTrigger: {
        trigger: triggerselector,
        markers: false,
        scrub: 4,
        start: "40% 50%",
        end: "100% 30%",
      },
      strokeDashoffset: 0,
      opacity: 0.3
    });
  });
  gsap.utils.toArray(outline).forEach((box) => {
    gsap.set(box, {
      strokeDasharray: 880,
      strokeDashoffset: 880,
      opacity: 0.3
    });
    gsap.to(box, {
      scrollTrigger: {
        trigger: triggerselector,
        markers: false,
        scrub: 4,
        start: "40% 80%",
        end: "90% 50%",
      },
      strokeDashoffset: 0,
    });
  });

  gsap.utils.toArray(bottombrain).forEach((box) => {
    gsap.set(box, {
      strokeDasharray: 227,
      strokeDashoffset: 227,
      opacity: 0.3
    });
    gsap.to(box, {
      scrollTrigger: {
        trigger: triggerselector,
        markers: false,
        scrub: 4,
        start: "70% 80%",
        end: "90% 50%",
      },

      strokeDashoffset: 0,
    });
  });
}





// ================
// page transition
// ================
const $header = document.querySelector('header');
const $main = document.querySelector('.profile-page');
const $logo = document.querySelector('.transition__logo');
const $frameBlack = document.querySelector('.page-transition__black');
const $frameRed = document.querySelector('.page-transition__seondary');
const $button = document.querySelector('#button');

let tltransition = new TimelineMax({
    paused: true
  })
  .fromTo($frameRed, 1.3, {
    scaleX: 0
  }, {
    scaleX: 1,
    transformOrigin: 'left',
    ease: Power4.easeInOut
  }, )
  .fromTo($frameBlack, 1.3, {
    scaleX: 0
  }, {
    scaleX: 1,
    transformOrigin: 'left',
    ease: Power4.easeInOut
  }, .1)
  .fromTo($logo, 1.6, {
    xPercent: -150,
    autoAlpha: 0
  }, {
    xPercent: -50,
    autoAlpha: 1,
    ease: Power4.easeInOut
  }, .1)
  .set($frameRed, {
    scaleX: 0
  }).fromTo($main, {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    ease: Power4.easeInOut
  }).fromTo($header, {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    ease: Power4.easeInOut
  })
  // .set($img2, {autoAlpha:0})
  .to($frameBlack, 0.8, {
    scaleX: 0,
    transformOrigin: 'right',
    ease: Power4.easeInOut
  })
  .to($logo, .2, {
    autoAlpha: 0
  }, '-=0.35')


window.addEventListener("load", (event) => {
  tltransition.play(0);

});


// ==================
// Section fade out
// ==================

gsap.utils.toArray(".Welcome-section").forEach((box) => {
  gsap.set(box, {
    opacity: 1
  });
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      markers: false,
      scrub: 4,
      start: "30% 30%",
      end: "60% 0%",
    },
    opacity: 0.6
  });
});



// splitting character


(function ($, undefined) {
  "use strict";
  var defaults = {
    animationclass: "scaledown",
    splittingchar: true,
    nested: true,
  };
  $.fn.splittingcharfn = function (options) {
    var settings = $.extend(defaults, options);
    $(this).each(function () {
      if (settings.splittingchar) {
        var text = $(this).text().split("");
      } else {
        var text = $(this).text().split(" ");
      }
      for (var i = 0, len = text.length; i < len; i++) {
        var j = i + 1;
        if (settings.nested) {
          text[i] = `<span class="outer-text"> <span class= "child char-${i}">${text[i]}</span></span>`;
        } else {
          text[i] = `<span class="child char-${i}">${text[i]}</span>`;
        }
      }
      if (settings.splittingchar) {
        $(this).html(text.join(""));
      } else {
        $(this).html(text.join(" "));
      }
    });
  };
})(jQuery);

$(".title-animation ").splittingcharfn({
  animationclass: "scaledown",
  splittingchar: false,
  nested: true,
});


gsap.from(".Welcome-section h1", 1.8, {
  y: 200,
  opacity: 0,
  ease: "power4.out",
  delay: 4,
});

// gsap.utils.toArray(".whatido").forEach((box) => {
//   gsap.set(box, {
//     opacity: 0,
//     scale: 0.8,
//   });
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: false,
//       scrub: 1,
//       start: "top 60%",
//       end: "10% 60%",
//     },
//     opacity: 1,
//     scale: 1,
//   });
// });


gsap.fromTo(".description", 1.8, {
  x: -290,
  y: 100,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  ease: "power4.out",
  delay: 5,
})



//============================
// Text scroll Animation End
// =======================

var popoverbox = document.querySelectorAll(".img_work_outer>.popupebox");
document.addEventListener('mousemove', (obj) => {
  popoverbox.forEach(pobox => {


    var x = obj.clientX;
    var y = obj.clientY;
    pobox.style.left = `calc(${obj.clientX}px - 0px)`;
    pobox.style.top = `calc(${obj.clientY}px + 20px)`;
  });

});


var hover = document.querySelectorAll('.img_work_outer');

// The functions are cointained inside another one to prevent execution on load.
hover.forEach(e => e.addEventListener("mouseover", () => mouseOver(e)));
hover.forEach(e => e.addEventListener("mouseout", () => mouseOut(e)));

function mouseOver(e) {

  e.classList.add("active");
  var index = 0;
  const slides = document.querySelectorAll(".img_work_outer.active > .popupebox .slides");
  const classHide = "slides-hidden",
    count = slides.length;
  // console.log(count);
  function nextSlide() {
    slides[(index++) % count].classList.add(classHide);
    slides[index % count].classList.remove(classHide);
    setTimeout(nextSlide, 4000);
  }
  nextSlide();
}

function mouseOut(e) {
  e.classList.remove("active");
}













//====== Introduction text highlighter ======//
// https://codepen.io/hexagoncircle/pen/gOPMwvd
//====== Introduction text highlighter ======//






// gsap.utils.toArray(".Welcome-section h1 span").forEach((box) => {
//   gsap.set(box, {
//     y: 200,
//     ease: 'power1.out',
//   });
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: false,
//       scrub: 1,
//       start: "0 100%",
//       end: "100% 50%"
//     },
//     ease: 'power1.out',
//     y: 0,
//   });
// });



// ==================
// spliting text
// =================

// https://web.dev/building-split-text-animations/


// https://github.com/jeremyharris/split_lines

const split = new SplitType('.paragraphs', {
  types: 'lines'
})

// Animate characters into view with a stagger effect
gsap.config({
  trialWarn: false
});

split.lines.forEach((target) => {
  gsap.to(target, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      markers: false,
      scrub: 1,
      start: "top 70%",
      end: "bottom 70%"
    }
  });
});




window.onresize = function () {


  //REVERSE SPLIT TEXT
  split.revert();

  //KILL SCROLL TRIGGER
  let triggers = ScrollTrigger.getAll();
  triggers.forEach(trigger => {
    trigger.kill();
  });

  //SPLIT TEXT AGAIN
  split.split();


  //RE-ADD SCROLL TRIGGER
  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  });



};




// SVG CALL


// gsap.utils.toArray(".introduction").forEach((box) => {
//   gsap.set(box, {
//     y: 100,
//     opacity: 0,
//     ease: 'power1.out',
//   });
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: false,
//       scrub: 1,
//       start: () => 'top 50%',
//       end: () => 'top 50%',
//     },
//     ease: 'power1.out',
//     y: 0,
//     opacity: 1
//   });
// });

gsap.utils.toArray(".section-title .child").forEach((box) => {
  gsap.set(box, {
    y: 100,
    opacity: 0,
    skewX: -50,
    skewY: 50,
    ease: 'power1.out',
  });
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      markers: false,
      scrub: 1,
      start: () => 'top 70%',
      end: () => 'top 70%',
    },
    ease: 'power1.out',
    y: 0,
    skewX: 0,
    skewY: 0,
    opacity: 1
  });
});

function DeveloperImg() {
  const doc = this.getSVGDocument();
  const selcetor = doc.querySelectorAll("svg path");

  function AnimationSVG() {
    gsap.from(selcetor, {
      opacity: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      transformOrigin: "center",
      stagger: { // wrap advanced options in an object
        each: 0.005,
        from: "end",
        ease: "power2.inOut",
      }
    });
  }

  ScrollTrigger.create({
    trigger: '.animationimage',
    start: () => 'top 50%',
    end: () => 'top 50%',
    markers: false,
    onEnter: () => {
      AnimationSVG();
    },
  });
}

// function WhatIdo() {
//   const doc = this.getSVGDocument();
//   const selcetor = doc.querySelectorAll("svg #Group_212 g");

//   gsap.utils.toArray(selcetor).forEach((box) => {
//     gsap.set(box, {
//       x: 100,
//       opacity: 0,
//       scaleX: 1.6,
//       ease: 'power1.out',
//     });
//     gsap.to(box, {
//       scrollTrigger: {
//         trigger: ".whatidoimg",
//         markers: false,
//         scrub: 3,
//         start: () => 'top 90%',
//         end: () => 'top 50%',
//       },
//       ease: 'power1.out',
//       x: 0,
//       scaleX: 1,
//       opacity: 1
//     });
//   });
// }

// ========================
// Text scroll Animation
// =======================
function TextScrollFunction(selector, StartPositionX, EndPositionX) {
  window.addEventListener("load", function () {
    gsap.utils.toArray(selector).forEach((textanim) => {
      gsap.set(textanim, {
        x: StartPositionX,
      });
      gsap.to(textanim, {
        scrollTrigger: {
          trigger: textanim,
          pin: false,
          scrub: true,
          markers: false,
          start: "top 100%",
          end: "bottom 0%",
        },
        x: EndPositionX,
        duration: 1000,
        ease: "none",
      });
    });
  });
}
TextScrollFunction(".text1", "-100%", "0%");
TextScrollFunction(".text2", "-100%", "-200%");
TextScrollFunction(".project_txte", "-100%", "-200%");
const refs = [...document.querySelectorAll(`[data-svg]`)];
for (let i = 0; i < refs.length; i++) {
  refs[i].addEventListener("load", window[refs[i].getAttribute("data-svg")]);
}