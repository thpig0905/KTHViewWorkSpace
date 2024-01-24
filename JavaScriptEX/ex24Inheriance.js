class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log('먹다');
  }
  sleep() {
    console.log('자다');
  }
}

class Teacher extends Person {
  constructor(name, age, teacherNo) {
    super(name, age);
    this.teacherNo = teacherNo;
  }
  teach() {
    console.log('가르치다');
  }
}

class Student extends Person {
  constructor(name, age, studentNo, grade) {
    super(name, age);
    this.studentNo = studentNo;
    this.grade = grade;
  }
  study() {
    console.log('공부하다');
  }
}

const Kim = new Person('김씨', 20, 1234);
console.log(Kim);
const Park = new Teacher('박씨', 30, 12341234);
console.log(Park);
const Lee = new Student('이씨', 10, 12341234, 5);
console.log(Lee);


console.dir(globalThis);

function test(){
  console.log(globalThis == true);
}
test();