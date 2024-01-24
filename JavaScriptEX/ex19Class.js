let cat = {
  kind : 'cat',
  name : '나비',
  age : 3,
  info : function(){
    console.log(` ---------- ${this.kind} ---------- `);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
}
let dog = {
  kind : 'dog',
  name : '망치',
  age : 2,
  info : function(){
    console.log(` ---------- ${this.kind} ---------- `);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
}
let hamster = {
  kind : 'hamster',
  name : '햄토리',
  age : 1,
  info : function(){
    console.log(` ---------- ${this.kind} ---------- `);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
}

class Pet {
  constructor(kind, name, age) {
    this.kind = kind;
    this.name = name;
    this.age = age;
    this.info = () => {
      console.log(` ---------- ${this.kind} ---------- `);
      console.log(`이름 : ${this.name}`);
      console.log(`나이 : ${this.age}`);
    };
  }
}