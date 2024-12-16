let navbar_icon = document.getElementById("icon");
let navbar_list = document.querySelector("ul");

navbar_icon.addEventListener("click", (e) => {
  if (e.target.name === "menu") {
    console.log("abrir");
    e.target.name = "close";
    navbar_list.classList.add("top-[70px]");
    navbar_list.classList.add("opacity-100");
  } else {
    console.log("close");
    e.target.name = "menu";
    navbar_list.classList.remove("top-[70px]");
    navbar_list.classList.remove("opacity-100");
  }
});
let home_link = document.querySelector("#home");
home_link.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
let internal_link = document.querySelectorAll("a[href^='#']");
internal_link.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefSectionTarget = e.target.getAttribute("href");
    const sectionTarget = document.querySelector(hrefSectionTarget);

    if (e.target.getAttribute("href") === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: sectionTarget.offsetTop + 60,
        behavior: "smooth",
      });
    }
  });
});