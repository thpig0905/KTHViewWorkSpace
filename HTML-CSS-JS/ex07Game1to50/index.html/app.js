const boxs = document.querySelectorAll(".box");
const startBtn = document.querySelector("#start");
const timer = document.querySelector(".timer");
const container = document.querySelector(".container");
const end = document.querySelector(".end");
const gameEnd = document.querySelector(".game_end");

let num = 1;

const MAX_NUM = 50;
const CHANGE_NUM = 25;

let frontNum = [];
let backNum = [];

startBtn.addEventListener('click', () =>{
  startBtn.innerHTML = "START";
  let checkNumList = [];
  boxs.forEach((box) => {
    box.style.display = "grid";
  });
  for(let i = 0; i < 25; i++){
    let randomNum = Math.floor(Math.random() * CHANGE_NUM) + 1;

    let check = false;
    for(let j = 0; j < checkNumList.length; j++){
      if(checkNumList[j] === randomNum){
        check = true;
        break;
      };
    };
    if(check){
      i--;
      continue;
    };
    checkNumList.push(randomNum);
    frontNum[i] = randomNum;
  };
  // boxes에 frontNum을 넣어줌

  for(let i = 0; i < 25; i++){
    boxs[i].innerHTML = frontNum[i];
  }
  
  checkNumList = [];
  for(let i = 0; i < 25; i++){
    // 25 ~ 50
    let randomNum = Math.floor(Math.random() * CHANGE_NUM) + CHANGE_NUM + 1;

    let check = false;
    for(let j = 0; j < checkNumList.length; j++){
      if(checkNumList[j] === randomNum){
        check = true;
        break;
      };
    };
    if(check){
      i--;
      continue;
    };
    checkNumList.push(randomNum);
    backNum[i] = randomNum;
  };
  let min = 0;
  let sec = 0;
    let msec = 0;
  
    let timerId = setInterval(() => {
      msec++;
      if(msec >= 100){
        msec = 0;
        sec++;
        if(sec >= 60){
          sec = 0;
          min++;
        };
      };
      timer.innerHTML = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}:${msec < 10 ? `0${msec}` : msec}`;
    }, 10);

    boxs.forEach((box, index) => {
      box.addEventListener('click', () => {
        if(box.innerHTML == num){
          console.log(num);
          num++;
          box.innerHTML = backNum[index];
          if(num > 26){
            console.log(num);
            box.innerHTML = "";
            box.style.backgroundColor = "white";
          }
        } else {
          boxs.forEach((box, index) => {
            if(box.innerHTML == num){
              box.style.backgroundColor = "red";
              setTimeout(() => {
                box.style.backgroundColor = "paleturquoise";
              }, 500);
            };
          });
        }
        // 50까지 다 맞추면 boxes를 모두 지우고 timer를 멈춤. 그리고 게임 종료 메시지를 띄움
        if(num > MAX_NUM){
          gameEnd.style.display = "block";
          gameEnd.innerHTML = `${timer.innerHTML}`;
          boxs.forEach((box) => {
            box.style.display = "none";
          });
          clearInterval(timerId);
          startBtn.innerHTML = "RESTART";
        };
      });
    });
    
    end.addEventListener('click', () => {
      gameEnd.style.display = "block";
          gameEnd.innerHTML = `${timer.innerHTML}`;
          boxs.forEach((box) => {
            box.style.display = "none";
          });
          clearInterval(timerId);
          startBtn.innerHTML = "RESTART";
    });
});