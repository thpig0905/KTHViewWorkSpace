let Student = class {
  constructor(id, name){
    this.id = id;
    this.name = name;
    Student.count++;
    Student.StudentArray += this;
  }
  print(){
    console.log(`학번 : ${this.id}`);
    console.log(`이름 : ${this.name}`);
  }
  static getTotalStudent = () => {
    console.log(`총 학생수 : ${Student.count}`);
  }
}

Student.count = 0;
const s1 = new Student(1, '홍길동');
s1.print();
const s2 = new Student(2, '임꺽정');
s2.print();
Student.getTotalStudent();
Student.getTotalStudent();