const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const infoBox = document.getElementById('info-box');
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 300; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.animationDuration = `${2 + Math.random() * 3}s`;
  starsContainer.appendChild(star);
}
const planets = [
  { id: 'mercury', name: 'ดาวพุธ', radius: 110, speed: 0.008 },
  { id: 'venus', name: 'ดาวศุกร์', radius: 160, speed: 0.006 },
  { id: 'earth', name: 'โลก', radius: 220, speed: 0.005 },
  { id: 'mars', name: 'ดาวอังคาร', radius: 280, speed: 0.004 },
  { id: 'jupiter', name: 'ดาวพฤหัสบดี', radius: 360, speed: 0.003 },
  { id: 'saturn', name: 'ดาวเสาร์', radius: 460, speed: 0.0025 },
  { id: 'uranus', name: 'ดาวยูเรนัส', radius: 560, speed: 0.002 },
  { id: 'neptune', name: 'ดาวเนปจูน', radius: 660, speed: 0.0015 }
];
planets.forEach(p => p.angle = Math.random() * Math.PI * 2);
function animate() {
  planets.forEach(p => {
    const el = document.getElementById(p.id);
    p.angle += p.speed;
    const x = centerX + p.radius * Math.cos(p.angle);
    const y = centerY + p.radius * Math.sin(p.angle);
    el.style.left = (x - el.offsetWidth / 2) + 'px';
    el.style.top = (y - el.offsetHeight / 2) + 'px';
  });
  requestAnimationFrame(animate);
}
animate();
const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const stars = Array.from({ length: 400 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5,
  s: Math.random() * 0.3 + 0.1
}));
function drawGalaxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 1.5);
  gradient.addColorStop(0, '#000010');
  gradient.addColorStop(1, '#000');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.x += star.s;
    if (star.x > canvas.width) star.x = 0;
  });
  requestAnimationFrame(drawGalaxy);
}
drawGalaxy();
