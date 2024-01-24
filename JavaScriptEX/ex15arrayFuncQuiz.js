let cat = {
  kind: '고양이',
  age: 5
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1
};

let pets = [cat, dog, rabbit, hamster, cat];

pets.forEach(obj => console.log(obj));

// 1. 동물의 kind 가 개 인것을 찾아라 

// 2. 동물의 kind 가 고양이 인것만 빼서 배열로 만들어라 

// 3. 총 동물의 평균 나이를 구해라 

// 4.동물 나이순으로 내림차순 정렬 
console.log('---------------------');
function findDog(obj) {
  for(let key in obj){
    if(obj[key].kind == '개'){
      console.log(obj[key]);
    }
  }
}
function findCat(obj){
  let arr = [];
  for(let key in obj){
    if(obj[key].kind != '고양이'){
      arr.push(obj[key]);
    }
  }
  return arr;
}
function findAvg(obj){
  let sum = 0;
  for(let key in obj){
    sum += obj[key].age;
  }
  return sum / obj.length;
}
function sortAge(obj){
  let arr = [];
  for(let key in obj){
    arr.push(obj[key].age);
  }
  arr.sort((a, b) => b - a);
  return arr;
}
findDog(pets);
console.log('---------------------');
console.log(findCat(pets));
console.log('---------------------');
console.log(findAvg(pets));
console.log('---------------------');
console.log(sortAge(pets));