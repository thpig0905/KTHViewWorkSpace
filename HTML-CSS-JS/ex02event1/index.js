const vartical = document.querySelector('.vartical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const loc = document.querySelector('.loc');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  vartical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  loc.style.left = `${x}px`;
  loc.style.top = `${y}px`;
  loc.innerHTML = `X : ${x}px Y : ${y}px`;
});