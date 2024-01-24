function checkNum(num){
  console.log(num);
  let result = false;
  if(num % 2 == 0){
    result = true;
  } else {
    result = false;
  }
  if(result){
    return '짝수입니다';
  } else {
    return '홀수입니다';
  }
}

console.log(checkNum(Math.floor(Math.random() * 99 + 1)));

console.log('---------------------');

function isAllOddNum(){
  let arr = [];
  let i = 0;
  while(true){
    arr[i] = Math.floor(Math.random() * 99 + 1);
    i++;
    if(i > 4){
      break;
    }
  }
  console.log(arr);
  let result = true;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      result = false;
      break;
    }
  }
  if(result){
    return '모두 홀수입니다';
  } else {  
    return '홀수가 아닌 수가 있습니다';
  }
}

console.log(isAllOddNum());