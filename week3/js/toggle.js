function toggleMenu() {
  let element = document.getElementById("toggle");
  if (element.style.display === "block") {
    element.style.display = "none";
    document.getElementById('toggle-symbol').innerHTML = "►";
  } else {
    element.style.display = "block";
    document.getElementById('toggle-symbol').innerHTML = "▼";
  }
}