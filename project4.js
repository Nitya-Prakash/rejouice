function locomotiveanim() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    smoothMobile: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loaderanim() {
  var tlLoader = gsap.timeline();

  tlLoader.from(".loader h3", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  tlLoader.to(".loader h3", {
    x: -26,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  tlLoader.to(
    ".loader",
    {
      opacity: 0,
    },
    "anim2"
  );

  tlLoader.to(
    ".loader",
    {
      display: "none",
    },
    "anim2"
  );
}

function page1headanim() {
  gsap.from(".page1-content h1 span", {
    y: 100,
    opacity: 0,
    duration: 1.7,
    stagger: 0.1,
    delay: 2.8,
  });
}

function cursoranim() {
  var page1Cont = document.querySelector(".page1-content");
  var cursor = document.querySelector(".cursor");

  page1Cont.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page1Cont.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Cont.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

function page2anim() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 85%",
      end: "top 68%",
      scrub: 2,
    },
  });

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 78%",
      end: "top 62%",
      scrub: 2,
    },
  });

  tl.from(
    ".page2-left-head1 h3",
    {
      y: 80,
      opacity: 0,
      duration: 1.4,
    },
    "anim"
  );

  tl.from(
    ".page2-left-head2 h3",
    {
      y: 80,
      opacity: 0,
      duration: 1.4,
    },
    "anim"
  );

  tl.from(
    ".page2-head-cont h3",
    {
      y: 80,
      opacity: 0,
      duration: 1.4,
    },
    "anim"
  );

  tl.from(
    ".page2-head-border",
    {
      width: 40,
      duration: 1.4,
    },
    "anim"
  );

  tl2.from(".page2-container-elem h1", {
    y: 80,
    opacity: 0,
    duration: 1.4,
    stagger: 0.3,
  });
}

function page3anim() {
  gsap.from(".page3-top-box h2", {
    y: 80,
    opacity: 0,
    duration: 1.4,
    stagger: 0.8,
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      start: "top 85%",
      end: "top 68%",
      scrub: 2,
    },
  });
}

function page4anim() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      // markers: true,
      start: "top 85%",
      end: "top 68%",
      scrub: 2,
    },
  });

  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      // markers: true,
      start: "top 78%",
      end: "top 62%",
      scrub: 2,
    },
  });

  tl3.from(
    ".page4-left-head1 h3",
    {
      y: 80,
      opacity: 0,
      duration: 1.4,
    },
    "anim"
  );

  tl3.from(
    ".page4-left-head2 h3",
    {
      y: 80,
      opacity: 0,
      duration: 1.4,
    },
    "anim"
  );

  tl3.from(
    ".page4-head-border",
    {
      width: 40,
      duration: 1.4,
    },
    "anim"
  );

  tl4.from(".page4-container-elem h1", {
    y: 80,
    opacity: 0,
    duration: 1.4,
    stagger: 0.3,
  });
}

function page5anim() {
  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      scroller: ".main",
      // markers: true,
      start: "top 85%",
      end: "top 68%",
      scrub: 2,
    },
  });

  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      scroller: ".main",
      // markers: true,
      start: "top 78%",
      end: "top 62%",
      scrub: 2,
    },
  });

  tl5.from(
    ".page5-left-head1 h3",
    {
      y: 80,
      opacity: 0,
      duration: 1.6,
    },
    "anim"
  );

  tl5.from(
    ".page5-left-head2 h3",
    {
      y: 80,
      opacity: 0,
      duration: 1.6,
    },
    "anim"
  );

  tl5.from(
    ".page5-head-border",
    {
      width: 40,
      duration: 1.6,
    },
    "anim"
  );

  tl6.from(".page5-container-elem h1", {
    y: 80,
    opacity: 0,
    duration: 1.6,
    stagger: 0.3,
  });
}

function slideranim() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}

function page5bottomanim() {
  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5-bottom",
      scroller: ".main",
      start: "top 85%",
      end: "top 68%",
      scrub: 2,
    },
  });

  tl7.from(".page5-bottom-box h2", {
    y: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    delay: 2.8,
  });
}

function page6headanim() {
  var tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page6-mid",
      scroller: ".main",
      start: "top 85%",
      end: "top 73%",
      scrub: 4,
    },
  });

  tl8.from(".page6-bottom h1 span", {
    y: -100,
    opacity: 0,
    duration: 3,
    stagger: 0.1,
    delay: 2.8,
  });
}



locomotiveanim();
loaderanim();
page1headanim();
cursoranim();
page2anim();
page3anim();
page4anim();
page5anim();
slideranim();
page5bottomanim();
page6headanim();