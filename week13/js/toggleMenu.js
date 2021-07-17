let iconMenu = document.getElementById("icon-menu");
let iconExitMenu = document.getElementById("icon-exit-menu");
let iconTemp = document.getElementById("icon-temp");
let iconExitTemp = document.getElementById("icon-exit-temp");

let menuBlock = document.getElementById("left-block");
let tempBlock = document.getElementById("right-block");
let noteBlock = document.getElementById("alert");


function openMenu() {
  iconMenu.style.display = "none";
  iconTemp.style.transform = "translateX(-300px)";
  menuBlock.style.transform = "translateX(0)";
  tempBlock.style.transform = "translateX(500px)";
}
function closeMenu() {
  iconMenu.style.display = "block";
  menuBlock.style.transform = "translateX(-500px)";
}


function openTempBlock() {
  iconMenu.style.display = "block";
  iconTemp.style.transform = "translateX(0px)";
  tempBlock.style.transform = "translateX(0px)";
  menuBlock.style.transform = "translateX(-500px)";
}
function closeTempBlock() {
  iconTemp.style.transform = "translateX(-300px)";
  tempBlock.style.transform = "translateX(500px)";
}

function closeNote() {
  noteBlock.style.display = "none";
}