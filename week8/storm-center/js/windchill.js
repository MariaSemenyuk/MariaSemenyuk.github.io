const tempValue = parseFloat(document.getElementById('airTemperature').innerHTML);
const speedValue = parseFloat(document.getElementById('windSpeed').innerHTML);
let windChill;

if (tempValue <= 50 && speedValue >= 3) {
  let s = Math.pow(speedValue, 0.16);
  windChill = 35,74 + 0.6215 * tempValue - 35.75 * s + 0.4275 * tempValue * s;
  windChill.toFixed(0);
  document.getElementById('windChill').innerHTML = windChill + ' &#176;F';
} else {
  document.getElementById('windChill').innerHTML = 'N/A';
}