const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 400) {
    header.classList.add("white");

  } else {
    header.classList.remove("white");

  }
});
