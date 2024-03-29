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

const showAnim = gsap
  .from("header", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});

//======================
// expiriance section
// =====================

// if (window.innerWidth > 1200) {
//   gsap.utils.toArray(".expirince-list li").forEach((box) => {
//     gsap.to(box, {
//       scrollTrigger: {
//         trigger: box,
//         markers: false,
//         scrub: 2,
//         toggleClass: "active",
//         start: "0% 45%",
//         end: "100% 50%",
//       },
//     });
//   });
// }


// gsap.utils.toArray(".expirince-list li").forEach((box) => {
//   gsap.set(box, {
//     opacity: 0,

//   });
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: true,
//       scrub: 1,
//       start: "top 60%",
//       end: "10% 60%",
//     },
//     opacity: 1,
//     scale: 1,
//   });
// });
// function ExpstaggerAnim(selector, staggerTime, y) {


//   const selcetor = document.querySelectorAll(selector);

//   gsap.set(selcetor, {
//     opacity: 0,
//     y: y
//   });
//   ScrollTrigger.batch(selcetor, {
//     // markers: true,
//     start: "top 50%",
//     end: "bottom 50%",
//     scrub: 2,
//     markers: true,
//     onEnter: batch => gsap.to(batch, {
//       opacity: 1,

//     }),

//     onLeave: batch => gsap.set(batch, {
//       opacity: 0,

//     }),
//     onEnterBack: batch => gsap.to(batch, {
//       opacity: 1,

//     }),
//     onLeaveBack: batch => gsap.set(batch, {
//       opacity: 0,

//     }),
//   });
//   // ScrollTrigger.addEventListener("refreshInit", () => gsap.set(selcetor, {
//   //   opacity: 0,
//   // }));
// }
// ExpstaggerAnim(".expirince-list li", 0.20, 0);

function Imageslider(selcetor) {

  gsap.utils.toArray(selcetor).forEach(element => {
    gsap.set(element, {
      x:0,
      y:0,
      z:0,
      rotationX: 0,
    })
    gsap.to(element, {
      ease: "power1.in",
      scrollTrigger: {

        trigger: element,
        scrub:true,
        start: "top 40%",
        end:  "+=300",
        // markers: true,
      },
      x:0,
      y:0,
      z:-500,
      rotationX: -20,
    })
  });
}
Imageslider(".expirince-list li>div", 0.20, 0);
// https://www.remarkgroup.com/en/tech-solutions
// https://greensock.com/forums/topic/28889-scrolltrigger-reveal-elements-one-by-one-on-entering-and-leaving-scroller-area/
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
      opacity: 0.3,
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
      opacity: 0.3,
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
      opacity: 0.3,
    });
  });
  gsap.utils.toArray(outline).forEach((box) => {
    gsap.set(box, {
      strokeDasharray: 880,
      strokeDashoffset: 880,
      opacity: 0.3,
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
      opacity: 0.3,
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
const $header = document.querySelector("header");
// const $main = document.querySelector(".profile-page");
const $logo = document.querySelector(".transition__logo");
const $frameBlack = document.querySelector(".page-transition__black");
const $frameRed = document.querySelector(".page-transition__seondary");
// const $button = document.querySelector("#button");

let tltransition = new TimelineMax({
    paused: true,
  })
  .fromTo(
    $frameRed,
    0.5, {
      scaleX: 0,
    }, {
      scaleX: 1,
      transformOrigin: "left",
      ease: Power4.easeInOut,
    }
  )
  .fromTo(
    $frameBlack,
    .5, {
      scaleX: 0,
    }, {
      scaleX: 1,
      transformOrigin: "left",
      ease: Power4.easeInOut,
    },
    0.1
  )
  .fromTo(
    $logo,
    0.5, {
      xPercent: -150,
      autoAlpha: 0,
    }, {
      xPercent: -50,
      autoAlpha: 1,
      ease: Power4.easeInOut,
    },
    0.1
  )
  .set($frameRed, {
    scaleX: 0,
  })
  // .fromTo(
  //   $main, {
  //     autoAlpha: 0,
  //   }, {
  //     autoAlpha: 1,
  //     ease: Power4.easeInOut,
  //   }
  // )
  .fromTo(
    $header, {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      ease: Power4.easeInOut,
    }
  )
  // .set($img2, {autoAlpha:0})
  .to($frameBlack, 0.8, {
    scaleX: 0,
    transformOrigin: "right",
    ease: Power4.easeInOut,
  })
  .to(
    $logo,
    0.2, {
      autoAlpha: 0,
    },
    "-=0.35"
  );

window.addEventListener("load", (event) => {
  tltransition.play(0);
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
          text[
            i
          ] = `<span class="outer-text"> <span class= "child char-${i}">${text[i]}</span></span>`;
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
  delay: 3,
});

gsap.utils.toArray(".whatido").forEach((box) => {
  gsap.set(box, {
    opacity: 0,
    scale: 0.8,
  });
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      markers: false,
      scrub: 1,
      start: "top 60%",
      end: "10% 60%",
    },
    opacity: 1,
    scale: 1,
  });
});

gsap.fromTo(
  ".description",
  1.8, {
    // x: -290,
    y: 100,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    ease: "power4.out",
    delay: 4,
  }
);

//============================
// Text scroll Animation End
// =======================



//============================
// Text read animation
// ==========================

const split = new SplitType(".paragraphs", {
  types: "lines",
});

// Animate characters into view with a stagger effect
gsap.config({
  trialWarn: false,
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
      end: "bottom 70%",
    },
  });
});

window.onresize = function () {
  //REVERSE SPLIT TEXT
  split.revert();

  //KILL SCROLL TRIGGER
  // let triggers = ScrollTrigger.getAll();
  // console.log(ScrollTrigger);
  // triggers.forEach(trigger => {
  //   trigger.kill();
  //   console.log("adss");
  // });

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
        end: "bottom center",
      },
    });
  });
};

// SVG CALL


// gsap.utils.toArray(".section-title .child").forEach((box) => {
//   gsap.set(box, {
//     y: 100,
//     opacity: 0,
//     skewX: -50,
//     skewY: 50,
//     ease: "power1.out",
//   });
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: true,
//       scrub: 1,
//       start: () => "top 70%",
//       end: () => "top 70%",
//     },
//     ease: "power1.out",
//     y: 0,
//     skewX: 0,
//     skewY: 0,
//     opacity: 1,
//   });
// });

function DeveloperImg() {
  const doc = this.getSVGDocument();
  const selcetor = doc.querySelectorAll("svg path");

  function AnimationSVG() {
    gsap.from(selcetor, {
      opacity: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      transformOrigin: "center",
      stagger: {
        // wrap advanced options in an object
        each: 0.005,
        from: "end",
        ease: "power2.inOut",
      },
    });
  }

  ScrollTrigger.create({
    trigger: ".animationimage",
    start: () => "top 50%",
    end: () => "top 50%",
    markers: false,
    onEnter: () => {
      AnimationSVG();
    },
  });
}
gsap.utils.toArray(".animationimage").forEach((box) => {
  gsap.set(box, {
    opacity: 0,
    ease: "power1.out",
  });
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      markers: false,
      scrub: 1,
      start: () => "top 50%",
      end: () => "top 50%",
    },

    opacity: 1,
  });
});


function WhatIdo() {
  const doc = this.getSVGDocument();
  const selcetor = doc.querySelectorAll("svg #Group_212 g");

  gsap.utils.toArray(selcetor).forEach((box) => {
    gsap.set(box, {
      x: 100,
      opacity: 0,
      scaleX: 1.6,
      ease: "power1.out",
    });
    gsap.to(box, {
      scrollTrigger: {
        trigger: ".whatidoimg",
        markers: false,
        scrub: 3,
        start: () => "top 90%",
        end: () => "top 50%",
      },
      ease: "power1.out",
      x: 0,
      scaleX: 1,
      opacity: 1,
    });
  });
}

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
TextScrollFunction(".project_text", "-100%", "-200%");

const refs = [...document.querySelectorAll(`[data-svg]`)];
for (let i = 0; i < refs.length; i++) {
  refs[i].addEventListener("load", window[refs[i].getAttribute("data-svg")]);
}
// https://www.milena-alexandrova.com/


// ============
// Custom login
// =============
document.getElementsByClassName("viewall")[0].addEventListener("click", function () {
  document.getElementById('id01').style.display = 'block';
});


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const aesGcmEncrypt = async function (plaintext, password) {
  try {
    const pwUtf8 = new TextEncoder().encode(password);
    const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
    const iv = new Uint8Array(12);
    const alg = {
      name: 'AES-GCM',
      iv: iv
    };
    const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);
    const ptUint8 = new TextEncoder().encode(plaintext);
    const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUint8);
    const ctArray = Array.from(new Uint8Array(ctBuffer));
    const ctStr = ctArray.map(byte => String.fromCharCode(byte)).join('');
    const ctBase64 = btoa(ctStr);
    const ivHex = Array.from(iv).map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return ivHex + ctBase64;
  } catch (err) {}
} //func aesGcmEncrypt




//Decrypt and Encrypt
const $result = document.querySelector('.result .resultContent');
const errorMsg = "WHoops, something went wrong";
let success;

document.querySelector('.encrypt form').addEventListener('submit', async (event, success) => {
  event.preventDefault();

  try {
    const text = event.target[0].value;
    // const text = "DM@denish";
    const pass = event.target[1].value;



    const result = await aesGcmEncrypt(text, pass);

    if (result === "000000000000000000000000YPBD5utmoXO6CPAB0jurGp2KgWJ6+/gMhW3ihMw=") {

      let elements = document.querySelectorAll(".img_work_outer");
      elements.forEach((element) => {
        element.classList.remove('private');
        modal.style.display = "none";
      });

    }

  } catch (e) {
    // $result.innerHTML = errorMsg
  }
});

// =======================
// On hover slider appear
// =======================

var popoverbox = document.querySelectorAll(".img_work_outer>.popupebox");
document.addEventListener("mousemove", (obj) => {
  popoverbox.forEach((pobox) => {
    var x = obj.clientX;
    var y = obj.clientY;
    pobox.style.left = `calc(${obj.clientX}px - 0px)`;
    pobox.style.top = `calc(${obj.clientY}px + 20px)`;
  });
});

var hover = document.querySelectorAll(".img_work_outer");

// The functions are cointained inside another one to prevent execution on load.
// hover.forEach((e) => e.addEventListener("mouseover", () => mouseOver(e)));
// hover.forEach((e) => e.addEventListener("mouseout", () => mouseOut(e)));
hover.forEach((e) => e.addEventListener("mouseenter", () => mouseOver(e)));
hover.forEach((e) => e.addEventListener("mouseleave", () => mouseOut(e)));
// console.log(hover)
function mouseOver(e) {
  e.classList.add("active");
  slider();
}
var timer;




function slider() {

  var index = 0;
  const slides = document.querySelectorAll(
    ".img_work_outer.active > .popupebox .slides"
  );
  const classHide = "slides-hidden",
    count = slides.length;
  //  console.log(count);

  function nextSlide() {
    slides[index++ % count].classList.add(classHide);
    slides[index % count].classList.remove(classHide);
    timer = setTimeout(nextSlide, 2000);
  }

  nextSlide();

}

function mouseOut(e) {
  clearTimeout(timer);
  e.classList.remove("active");
}

//  Play
var video = document.getElementById("bgvid");

setTimeout(() => {
  video.play();
}, 2000);