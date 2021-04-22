const dayNames = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`
]

const monthNames = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
]

const todaysDate = new Date();
const dayName = dayNames[todaysDate.getDay()];
const monthName = monthNames[todaysDate.getMonth()];
const currentDate = `${dayName}, ${todaysDate.getDate()} ${monthName}, ${todaysDate.getFullYear()}`;

document.getElementById(`currentDate`).textContent = currentDate;