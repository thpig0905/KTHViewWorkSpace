const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let player = {
  x: 10,
  y: 10,
  size: 50, 
  color: 'blue'
}

let enemy = {
  x: canvas.width / 2 - 40,
  y: canvas.height / 2 - 40,
  size: 80,
  color: 'green'
}

let test = [{
  size: 80,
  x: 10,
  y: canvas.height - 40,
  color: 'black'
}];

test.length = 4;

// for(let i = 0; i < test.length; i++) {
//   test.push({
//     size: 80,
//     x: 10 + i * 100,
//     y: canvas.height - 40,
//     color: 'black'
//   });
// };

// for(let i = 0; i < test.length; i++) { 
//   ctx.beginPath();
//   ctx.rect(test[i].x, test[i].y, test[i].size, test[i].size);
//   ctx.fillStyle = test[i].color;
//   ctx.fill();
// }

ctx.beginPath();
ctx.rect(enemy.x, enemy.y, enemy.size, enemy.size);
ctx.fillStyle = enemy.color;
ctx.fill();

ctx.beginPath();
ctx.rect(player.x, player.y, player.size, player.size);
ctx.fillStyle = player.color;
ctx.fill();

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    player.x += 10;
    if (player.x > 800 - 100) {
      player.x = 800 - 100;
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
    if (player.y > 400 - 100) {
      player.y = 400 - 100;
    }
  }
  ctx.clearRect(0, 0, 800, 400);
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.size, player.size);
  if(player.x > enemy.x - player.size && player.x < enemy.x + enemy.size && player.y > enemy.y - player.size && player.y < enemy.y + enemy.size) {
    enemy.color = 'red';
    ctx.fillStyle = player.color;
  } else {
    enemy.color = 'green';
    ctx.fillStyle = player.color;
  }
  ctx.fill();
  ctx.beginPath();
  ctx.rect(enemy.x, enemy.y, enemy.size, enemy.size);
  ctx.fillStyle = enemy.color;
  ctx.fill();
});