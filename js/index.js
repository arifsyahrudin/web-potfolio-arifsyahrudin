// navbar style
const navbar = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  const scrollThreshold = 250;

  if (scrollPosition > scrollThreshold) {
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.backdropFilter = "";
  }
});
// navbar style

// jumbotron style
const typed = new Typed(".auto-type", {
  strings: ["Arif", "Front-End", "Designer"],
  typeSpeed: 150,
  backSpeed: 20,
  loop: true,
});
// jumbotron style

