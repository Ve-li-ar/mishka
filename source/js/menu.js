const toggleBtn = document.querySelector(".button-burger"),
  mainNav = document.querySelector(".main-nav__wrap");

document.querySelector("html").classList.remove("no-js"),


  toggleBtn.addEventListener("click", () => {
    mainNav.classList.toggle("main-nav__wrap--closed");
  });
