let cat = {};

console.log(cat.__proto__);

function Pet(name, age){
  this.name = name;
  this.age = age;
}
console.log(Pet.prototype);
console.dir(Pet.prototype, { ShowHidden : true});


console.log(Pet.prototype.constructor == Pet);
console.log(Pet.prototype.constructor.prototype == Pet.prototype);

const dog = new Pet('망치', 2);

console.log(dog.__proto__);
console.log(dog.__proto__ == Pet.prototype);