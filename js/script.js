"use strict";
document.addEventListener("click", documentClick);
function documentClick(e) {
  const targetElement = e.target;
  if (targetElement.closest(".menu-switch")) {
    document.body.classList.toggle("menu-open");
  }
  if (targetElement.closest("[data-spoiler]")) {
    const currentElement = targetElement.closest("[data-spoiler]");
    if (!currentElement.nextElementSibling.classList.contains("--sliding")) {
      currentElement.classList.toggle("active");
    }
    slideToggle(currentElement.nextElementSibling);
  }
}
const spoilers = document.querySelectorAll("[data-spoiler]");

if (spoilers.length) {
  spoilers.forEach((spoiler) => {
    spoiler.nextElementSibling.hidden = true;
  });
}

let slideDown = (target, duration = 500) => {
  if (!target.classList.contains("--sliding")) {
    target.classList.add("--sliding");
    target.hidden = false;
    let height = target.offsetHeight;

    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;

    target.style.overflow = "hidden";
    target.style.height = 0;

    target.offsetHeight;

    target.style.transitionProperty = `height, margin, padding`;
    target.style.transitionDuration = `${duration}ms`;

    target.style.height = `${height}px`;

    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("margin-top");

    setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("--sliding");
    }, duration);
  }
};
let slideUp = (target, duration = 500) => {
  if (!target.classList.contains("--sliding")) {
    target.classList.add("--sliding");
    let height = target.offsetHeight;

    target.style.transitionProperty = `height, margin, padding`;
    target.style.transitionDuration = `${duration}ms`;
    target.style.height = `${height}px`;

    target.offsetHeight;

    target.style.overflow = "hidden";
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;

    target.style.height = 0;

    setTimeout(() => {
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("margin-top");

      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("--sliding");

      target.hidden = true;
    }, duration);
  }
};
let slideToggle = (target, duration = 500) => {
  target.hidden ? slideDown(target, duration) : slideUp(target, duration);
};

var splideHero = new Splide("#splide-hero", {
  pagination: true,
  type: `loop`,
  speed: 800,
  autoHeight: true,
  autoplay: true,
  interval: 6000,
  pauseOnHover: true,
  classes: {
    pagination: "splide__pagination splide__pagination--hero",
    page: "splide__pagination-page splide__pagination-page--hero",
  },
});
splideHero.mount();

var splideNew = new Splide("#new-splide", {
  type: `loop`,
  speed: 900,
  perPage: 4,
  perMove: 1,
  pagination: false,
  autoHeight: true,
  gap: "2.4375rem",
  breakpoints: {
    991.98: { perPage: 3, gap: "2rem" },
    767.98: { perPage: 2, gap: "1.9rem" },
    500: { perPage: 1.5, gap: "1.5rem" },
  },
});
splideNew.mount();

var splideFeedback = new Splide("#feedback-splide", {
  type: `loop`,
  speed: 1000,
  perPage: 3,
  perMove: 1,
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  pagination: true,
  arrows: false,
  autoHeight: true,
  gap: "1.4375rem",
  breakpoints: {
    991.98: { perPage: 2, gap: "1.2rem" },
    500: { perPage: 1.4, gap: "0.8rem" },
  },
  classes: {
    pagination: "splide__pagination splide__pagination--feedback",
    page: "splide__pagination-page splide__pagination-page--feedback",
  },
});
splideFeedback.mount();
