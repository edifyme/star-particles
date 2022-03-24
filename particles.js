import {randInt} from './utils.js';

const [WIDTH, HEIGHT] = [800, 600];
const bgColor = 'black';
const drawColor = 'white';
const fillColor = 'aliceblue';

const canvas = document.getElementById('canvas');
const cx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.background = bgColor;
const [centerX, centerY] = [canvas.width/2, canvas.height/2];

class Particle {
  constructor(x = centerX, y = centerY, radius = 1, color = fillColor) {
    this.x = x;
    this.y = y;
    this.r = radius;
    this.color = color;
    this.vel = { x: 0, y: 0 };
    this.step = 0;
  }

  draw() {
    cx.beginPath();
    cx.fillStyle = this.color;
    cx.strokeStyle = drawColor;
    cx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    cx.fill();
    // cx.stroke();
  }
}

// create particles with random location and size
const particles = Array(900).fill().map(() =>
  new Particle(randInt(WIDTH), randInt(HEIGHT * 2), randInt(3)));

let rotation = 0;
let deltaTime = 0;
let lastTime = 0;
let elapsed = 0;
const fps = 60;

function animate(timeStamp) {
  deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  elapsed += deltaTime;
  
  if (elapsed > fps) {
    elapsed = 0;
    cx.fillRect(0, 0, canvas.width, canvas.height);
    cx.save();
    cx.translate(centerX, centerY);
    cx.rotate(rotation);
    cx.translate(-centerX, -centerY);
    particles.forEach(item => {
      const r = Math.random() * 255;
      const g = Math.random() * 255;
      const b = Math.random() * 255;
      item.color = `rgba(${r},${g},${b},0.5)`;
      item.draw();
    });
    cx.restore();
    rotation += 0.001;
  }

  requestAnimationFrame(animate);
}
animate(0);