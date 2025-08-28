function myMenuFunction() {
  var menuBth = document.getElementById("myNavMenu")

  if (menuBth.className === "nav-menu") {
    menuBth.className += " responsive";
  } else {
    menuBth.className = "nav-menu";
  }
}

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark")
});


var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Coder", "Developer"],

  loop: true,
  typeSpeed: 300,
  backSpeed: 50,
  backDelay: 150,
})

// My Services
// ScrollReveal Animations
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".featured-text, .about-info, .service-box, .project-box, .contact-info", {
  origin: "top",
});

ScrollReveal().reveal(".skill-box, .form-control", { origin: "bottom" });
ScrollReveal().reveal(".feature-image, .col", { origin: "right" });
ScrollReveal().reveal(".social_icons, .footer-social-icons", { origin: "left" });

ScrollReveal().reveal(".service-box", {
  origin: "bottom",
  interval: 200, // delay between each service card
});
