const image = document.querySelector(".image");
const hover = document.querySelector(".hover");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const shareBtn = document.querySelector(".share");

function show() {
  hover.classList.add("active");
  modal.classList.add("show");
}

function hide() {
  hover.classList.remove("active");
  modal.classList.remove("show");
}

image.addEventListener("click", show);
close.addEventListener("click", hide);

let shareData = {
  title: document.title,
  text: `Look what I found ${document.title}`,
  url: window.location.href,
};

shareBtn.addEventListener("click", () => {
  navigator
    .share(shareData)
    .then(() => console.log("Shared success"))
    .catch((e) => console.log(`Error: ${e}`));
});
