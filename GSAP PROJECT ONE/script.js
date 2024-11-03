function show() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
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
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

show();

gsap.to("#bot", {
  rotate: 15,
  scrollTrigger: {
    trigger: "#bot",
    scroller: "#main",
    start: "top 5%",
    end: "top -416%",
    scrub: true,
    pin: true,
  },
});

gsap.to("#bot", {
  scale: 0.5,
  scrollTrigger: {
    trigger: "#page5 h1",
    scroller: "#main",
    start: "top 430%",
    end: "top -430%",
    scrub: true,
    pin: true,
  },
});

let tl = gsap.timeline();
tl.from("#main #page1_logo_image", {
  opacity: 0,
  duration: 1,
  scale: 0.1,
});

tl.from("#bot", {
  opacity: 0,
  duration: 1,
  scale: 0.1,
});

tl.from("#nav_top button", {
  x: 200,
});

gsap.from("#page2_part1 button", {
  scrollTrigger: {
    trigger: "#page2_part2 button",
    scroller: "#main",
    start: "top 70%",
  },
  x: -300,
  duration: 1,
});

gsap.from("#page6_part6 button", {
  scrollTrigger: {
    trigger: "#page6_part2 button",
    scroller: "#main",
    start: "top 70%",
  },
  x: 600,
  duration: 1,
});
