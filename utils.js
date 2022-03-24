// array of colors
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// generate a random integer from 0 to max-1
function randInt(max) { 
  return  Math.random() * max | 0;
}

// calculate between two points
function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

export { randInt, distance, colors };