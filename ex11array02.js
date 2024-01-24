function test(){
  let i = 0;
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];

  while(true){
    if(i <= 5){
      arr1.push(i);
    }
    if(i >= 6 && i <= 15){
      arr2.push(i);
    }
    if(i >= 4){
      arr3.push(i);
    }
    i++;
    if(i > 15){
      break;
    }
  }
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
}

test();

function printArray(num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    console.log('숫자를 입력하세요');
    return;
  }
  if(num2 < num1){
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let result = '';
  for(let i = num1; i <= num2; i++){
    result += i + ' ';
  }
  return result;
}

console.log(printArray(1, 10));