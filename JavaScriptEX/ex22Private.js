class Student {
  static count = 0;
  #id;
  #name;
  constructor(id, name){
    this.#id = id;
    this.#name = name;
    Student.count++;
  }
  static fromObject(obj){
    if(!!obj.id && !!obj.name){
      return new Student(obj.id, obj.name);
    }
  }
  #getName = () => {
    return this.#name;
  }
  get id(){
    return this.#id;
  }
  get name(){
    return this.#name;
  }
  set name(name){
    this.#name = name;
  }
  set id (id){
    this.#id = id;
  }
}

const s1 = new Student(1, '홍길동');
console.log(s1.id);
s1.name = '임꺽정';
console.log(s1.name);
const s2 = Student.fromObject({id:2, name:'임꺽정'});
console.log(s2 instanceof Student);