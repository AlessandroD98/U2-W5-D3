let imgObj = null;

const button = document.getElementById("button1");
button.addEventListener("click", moveRight);

function init() {
  imgObj = document.getElementById("img");
  imgObj.style.position = "relative";
  imgObj.style.left = "0px";
}
function moveRight() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
  animate = setTimeout(moveRight, 30);
}

let button2 = document.getElementById("button2");
button2.onclick = reloadPage;

function reloadPage() {
  window.location.reload();
}
window.onload = init;
