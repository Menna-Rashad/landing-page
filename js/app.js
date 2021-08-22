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
