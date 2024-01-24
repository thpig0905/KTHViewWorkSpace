const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let box = {
  size: 50,
  x: 100,
  y: 100,
  color: 'green'
}

let box1 = {
  size: 50,
  x: 200,
  y: 100,
  color: 'green'
}

let box2 = {
  size: 50,
  x: 300,
  y: 100,
  color: 'green'
}

let box3 = {
  size: 50,
  x: 400,
  y: 100,
  color: 'green'
}

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

ctx.beginPath();
ctx.rect(box.x, box.y, box.size, box.size);
ctx.fillStyle = box.color;
ctx.fill();

ctx.beginPath();
ctx.rect(box1.x, box1.y, box1.size, box1.size);
ctx.fillStyle = box1.color;
ctx.fill();

ctx.beginPath();
ctx.rect(box2.x, box2.y, box2.size, box2.size);
ctx.fillStyle = box2.color;
ctx.fill();

ctx.beginPath();
ctx.rect(box3.x, box3.y, box3.size, box3.size);
ctx.fillStyle = box3.color;
ctx.fill();

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
  ctx.clearRect(0, 0, 800, 400);
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.size, player.size);
  if(player.x > box.x - player.size && player.x < box.x + box.size && player.y > box.y - player.size && player.y < box.y + box.size) {
    box.color = 'red';
    ctx.fillStyle = box.color;
  } else {
    box.color = 'green';
    ctx.fillStyle = box.color;
  }
  if(player.x > box1.x - player.size && player.x < box1.x + box1.size && player.y > box1.y - player.size && player.y < box1.y + box1.size) {
    box1.color = 'red';
    ctx.fillStyle = box1.color;
  } else {
    box1.color = 'green';
    ctx.fillStyle = box1.color;
  }
  if(player.x > box2.x - player.size && player.x < box2.x + box2.size && player.y > box2.y - player.size && player.y < box2.y + box2.size) {
    box2.color = 'red';
    ctx.fillStyle = box2.color;
  } else {
    box2.color = 'green';
    ctx.fillStyle = box2.color;
  }
  if(player.x > box3.x - player.size && player.x < box3.x + box3.size && player.y > box3.y - player.size && player.y < box3.y + box3.size) {
    box3.color = 'red';
    ctx.fillStyle = box3.color;
  } else {
    box3.color = 'green';
    ctx.fillStyle = box3.color;
  }
  player.color = 'blue';
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.beginPath();
  ctx.rect(box.x, box.y, box.size, box.size);
  ctx.fillStyle = box.color;
  ctx.fill();
  ctx.beginPath();
  ctx.rect(box1.x, box1.y, box1.size, box1.size);
  ctx.fillStyle = box1.color;
  ctx.fill();
  ctx.beginPath();
  ctx.rect(box2.x, box2.y, box2.size, box2.size);
  ctx.fillStyle = box2.color;
  ctx.fill();
  ctx.beginPath();
  ctx.rect(box3.x, box3.y, box3.size, box3.size);
  ctx.fillStyle = box3.color;
  ctx.fill();
});