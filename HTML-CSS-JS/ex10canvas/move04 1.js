const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let player = {
  size: 30,
  x: 0,
  y: 0,
  color: 'blue'
}
ctx.beginPath();
ctx.rect(player.x, player.y, player.size, player.size);
ctx.fillStyle = player.color;
ctx.fill();

let boxes = [{
  x: 100,
  y: canvas.height / 2 -25,
  size: 50,
  color: 'green'
}];

for(let i = 0; i < 5; i++) {
  boxes.push({
    x: 100 + i * 100,
    y: canvas.height / 2 -25,
    size: 50,
    color: 'green'
  })
};

for(let i = 0; i < 5; i++) {
  ctx.beginPath();
  ctx.rect(boxes[i].x, boxes[i].y, boxes[i].size, boxes[i].size);
  ctx.fillStyle = boxes[i].color;
  ctx.fill();
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    player.x += 10;
    if (player.x > 800 - 30) {
      player.x = 800 - 30;
    }
  } else if (e.key === 'ArrowLeft') {
    player.x -= 10;
    if (player.x < 0) {
      player.x = 0;
    }
  } else if (e.key === 'ArrowUp') {
    player.y -= 10;
    if (player.y < 0) {
      player.y = 0;
    }
  } else if (e.key === 'ArrowDown') {
    player.y += 10;
    if (player.y > 400 - 30) {
      player.y = 400 - 30;
    }
  }
  for(let i = 0; i < 5; i++){
    if (player.x < boxes[i].x + boxes[i].size &&
      player.x + player.size > boxes[i].x &&
      player.y < boxes[i].y + boxes[i].size &&
      player.y + player.size > boxes[i].y) {
        boxes[i].color = 'red';
      } else {
        boxes[i].color = 'green';
      }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.size, player.size);
  ctx.fillStyle = player.color;
  ctx.fill();
  for(let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.rect(boxes[i].x, boxes[i].y, boxes[i].size, boxes[i].size);
    ctx.fillStyle = boxes[i].color;
    ctx.fill();
  }
})