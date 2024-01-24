// 반복문 
// while, do~while, for

let i = 1;
while(i <= 10){
  console.log(i);
  i++;
}

console.log('---------------------');

// for - in : 객체의 속성을 순회한다
let array = [10, 20, 30, 40, 50, 60];
i = 1;
for(let i in array){
  console.log(i);
}

console.log('---------------------');

// for - of : 배열의 요소를 순회한다
for(let i of array){
  console.log(i);
}
console.log('---------------------');

let dog = {
  name : '바둑이',
  age : 5,
  owner : {name : '김태히'}
}

for(let key in dog){
  console.log('key : ' + key +' value : ' + dog[key]);
  console.log(`key : ${key} value : ${dog[key]}`);
}

console.log('---------------------');

// for(let key of dog){
//   console.log(key, dog[key]);
// }

function printTest(){
  var test = 100;
  console.log(test);
}
printTest();