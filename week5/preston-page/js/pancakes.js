const pancakeAnnouncement = document.querySelector('.pancakes');

const dayOfWeek= todaysDate.getDay();

if ( dayOfWeek == 6 ) {
  pancakeAnnouncement.style.display = "block";
}

pancakeAnnouncement.onclick = function(e) {
  pancakeAnnouncement.style.display = "none";
}