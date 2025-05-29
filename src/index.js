import "./modern-normalize.css";
import "./styles.css";

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const dotsContainer = document.querySelector(".dots-container");
const leftArrow = document.querySelector(".prev");
const rightArrow = document.querySelector(".next");
let current = 0;

progressSlideshow(slides, dots);

rightArrow.addEventListener("click", () => nextSlide(slides, dots));
leftArrow.addEventListener("click", () => prevSlide(slides, dots));
dotsContainer.addEventListener("click", selectDot(slides, dots));

function nextSlide(slidesNode, dotsNode) {
  const arrayOfSlides = Array.from(slidesNode);
  const arrayOfDots = Array.from(dotsNode);

  for (const slide of arrayOfSlides) {
    if (slide.classList.contains("current")) {
      current = arrayOfSlides.indexOf(slide);
    }
  }
  arrayOfSlides[current].classList.add("hidden");
  arrayOfSlides[current].classList.remove("current");
  arrayOfDots[current].style.backgroundColor = "grey";

  current++;
  if (current === arrayOfSlides.length) {
    current = 0;
  }

  arrayOfSlides[current].classList.remove("hidden");
  arrayOfSlides[current].classList.add("current");
  arrayOfDots[current].style.backgroundColor = "black";
}

function prevSlide(slidesNode, dotsNode) {
  const arrayOfSlides = Array.from(slidesNode);
  const arrayOfDots = Array.from(dotsNode);

  for (const slide of arrayOfSlides) {
    if (slide.classList.contains("current")) {
      current = arrayOfSlides.indexOf(slide);
    }
  }
  arrayOfSlides[current].classList.add("hidden");
  arrayOfSlides[current].classList.remove("current");
  arrayOfDots[current].style.backgroundColor = "grey";

  current--;
  if (current < 0) {
    current = arrayOfSlides.length - 1;
  }

  arrayOfSlides[current].classList.remove("hidden");
  arrayOfSlides[current].classList.add("current");
  arrayOfDots[current].style.backgroundColor = "black";
}

function progressSlideshow(slidesNode, dotsNode) {
  const arrayOfSlides = Array.from(slidesNode);
  const arrayOfDots = Array.from(dotsNode);

  for (const slide of arrayOfSlides) {
    if (slide.classList.contains("current")) {
      current = arrayOfSlides.indexOf(slide);
    }
  }

  arrayOfDots[current].style.backgroundColor = "black";

  setInterval(() => {
    arrayOfSlides[current].classList.add("hidden");
    arrayOfSlides[current].classList.remove("current");
    arrayOfDots[current].style.backgroundColor = "grey";
    current++;
    if (current === arrayOfSlides.length) {
      current = 0;
    }
    arrayOfSlides[current].classList.remove("hidden");
    arrayOfSlides[current].classList.add("current");
    arrayOfDots[current].style.backgroundColor = "black";
  }, 2000);
}

function selectDot(slidesNode, dotsNode) {
  return function (e) {
    const arrayOfSlides = Array.from(slidesNode);
    const arrayOfDots = Array.from(dotsNode);
    let index;
    if (e.target.classList.contains("dot")) {
      index = e.target.dataset.index;
    } else {
      return;
    }

    arrayOfSlides[current].classList.add("hidden");
    arrayOfSlides[current].classList.remove("current");
    arrayOfDots[current].style.backgroundColor = "grey";

    current = parseInt(index);

    arrayOfSlides[current].classList.remove("hidden");
    arrayOfSlides[current].classList.add("current");
    arrayOfDots[current].style.backgroundColor = "black";
  };
}
