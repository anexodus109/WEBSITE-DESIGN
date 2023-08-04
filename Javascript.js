const list = document.querySelector(".list");
const body = document.querySelector("body");

list.addEventListener("scroll", (e) => {
  switch (true) {
    case e.target.scrollTop < 200:
      body.style.background = "linear-gradient(to top, #9D83EF, #C4BEFC)";
      break;
    case e.target.scrollTop < 400:
      body.style.background = "linear-gradient(to top, #70A0EF, #93BAFA)";
      break;
    case e.target.scrollTop > 400:
      body.style.background = "linear-gradient(to top, #26C485, #93F9D0)";
      break;
  }
});
