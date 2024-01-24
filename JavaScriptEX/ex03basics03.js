const dog = {
  name: '멍멍이',
  age: 2
}

console.log(dog);

const otherDog = dog;
otherDog.owner = {
  name: '제임스',
  age: 40
}
console.log(dog);
console.log(otherDog);

const anotherDog = {...dog};
otherDog.name = '흰둥이';
anotherDog.owner.name = '존';
console.log(dog);
console.log(otherDog);
console.log(anotherDog);