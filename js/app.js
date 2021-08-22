// Navigation
const sections = document.querySelectorAll("section");
const ul = document.querySelector("#navbar__list");

sections.forEach((section) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.textContent = section.getAttribute("data-nav");
  anchor.classList.add("menu__link");
  li.appendChild(anchor);
  ul.appendChild(li);
});

//Section Active State
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    // check if the element is in the viewport using .getBoundingClientRect();
    if (
      section.getBoundingClientRect().top >= 0 &&
      section.getBoundingClientRect().top <= 400
    ) {
      // if it's in the viewport, add the active class
      section.classList.add("your-active-class");
    } else {
      // if it's not, remove the active class
      section.classList.remove("your-active-class");
    }
  });
});

// Scroll to Anchor
ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "A") {
    sections.forEach((section) => {
      if (section.getAttribute("data-nav") === e.target.textContent) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// Scroll to top button
const scrollTop = document.querySelector("#scrollTop");
scrollTop.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});
