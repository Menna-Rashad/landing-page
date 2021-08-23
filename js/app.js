// Navigation
const sections = document.querySelectorAll("section");
const ul = document.querySelector("#navbar__list");
const scrollTop = document.querySelector("#scrollTop");

sections.forEach((section) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.textContent = section.getAttribute("data-nav");
  anchor.classList.add("menu__link");
  li.appendChild(anchor);
  ul.appendChild(li);
});

// getting the navigation links after rendering them into the DOM, convert the nodeList into an array

const links = document.querySelectorAll(".menu__link");
const linksArr = Array.from(links);

//Section Active State
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    // check if the element is in the viewport using .getBoundingClientRect();
    if (
      section.getBoundingClientRect().top >= 0 &&
      section.getBoundingClientRect().top <= 400
    ) {
      // if it's in the viewport, add the active class and filter the links array for a matching link for the active state
      section.classList.add("your-active-class");
      const matchingLink = linksArr.filter((link) => {
        return link.textContent === section.getAttribute("data-nav");
      });
      matchingLink[0].classList.add("active");
    } else {
      // if it's not, remove the active class and remove the active class from other nav links
      section.classList.remove("your-active-class");
      const notMatchingLink = linksArr.filter((link) => {
        return link.textContent === section.getAttribute("data-nav");
      });
      notMatchingLink.forEach((link) => {
        link.classList.remove("active");
      });
    }
    // Active class for nav links
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
scrollTop.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});
