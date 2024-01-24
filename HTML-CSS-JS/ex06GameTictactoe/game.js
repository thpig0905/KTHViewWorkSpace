const td_list = document.querySelectorAll('td');
const tr_list = document.querySelectorAll('tr');
const end = document.querySelector('.end');
const restart = document.querySelector('.restart');

let turn = true;

td_list.forEach((td) => {
  td.addEventListener('click', (e) => {
    if(turn) {
      e.target.textContent = 'O';
      td.style.backgroundColor = 'lightblue';
      if(checkWinner() === 'O') {
        end.textContent = '블루가 승리하였습니다.';
        end.style.display = 'block';
        restart.style.display = 'block';
        restart.addEventListener('click', restartGame);
        turn = true;
      }
    } else {
      e.target.textContent = 'X';
      td.style.backgroundColor = 'pink';
      if(checkWinner() === 'X') {
        end.textContent = '핑크가 승리하였습니다.';
        end.style.display = 'block';
        restart.style.display = 'block';
        restart.addEventListener('click', restartGame);
        turn = true;
      }
    }
    turn = !turn;
  });
});

function checkWinner() {
  let winner = '';

  // 가로
  for(let i = 0; i < 3; i++) {
    if(tr_list[i].children[0].textContent === tr_list[i].children[1].textContent && tr_list[i].children[1].textContent === tr_list[i].children[2].textContent) {
      winner = tr_list[i].children[0].textContent;
    }
  };

  // 세로
  for(let i = 0; i < 3; i++) {
    if(tr_list[0].children[i].textContent === tr_list[1].children[i].textContent && tr_list[1].children[i].textContent === tr_list[2].children[i].textContent) {
      winner = tr_list[0].children[i].textContent;
    }
  };

  // 대각선
  if(tr_list[0].children[0].textContent === tr_list[1].children[1].textContent && tr_list[1].children[1].textContent === tr_list[2].children[2].textContent) {
    winner = tr_list[0].children[0].textContent;
  } else if(tr_list[0].children[2].textContent === tr_list[1].children[1].textContent && tr_list[1].children[1].textContent === tr_list[2].children[0].textContent) {
    winner = tr_list[0].children[2].textContent;
  };



  // 무승부

  let count = 0;

  td_list.forEach((td) => {
    if(td.textContent !== '') {
      count++;
    }
  });

  if(count === 9 && winner === '') {
    end.textContent = '무승부입니다.';
    end.style.display = 'block';
    restart.style.display = 'block';
    restart.addEventListener('click', restartGame);
    turn = true;
  };

  return winner;
};

function restartGame() {
  td_list.forEach((td) => {
    td.textContent = '';
    td.style.backgroundColor = 'lightgray';
  });
  end.style.display = 'none';
  restart.style.display = 'none';
};