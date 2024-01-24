class Counter {
  #value;
  constructor(value){
    if(value < 0){
      console.log('음수는 입력할 수 없습니다.');
      return;
    }
    this.#value = value;
  }
  static createCounter(value){
    if(value < 0){
      console.log('음수는 입력할 수 없습니다.');
      return;
    }
    return new Counter(value);
  }
  get value(){
    return this.#value;
  }
  set value(value){
    if(value < 0){
      console.log('음수는 입력할 수 없습니다.');
      return;
    }
    this.#value = value;
  }
  increment(){
    this.#value++;
  }
}

const counter1 = new Counter(-100);

const counter = new Counter(5);
console.log(counter);
counter.increment();
console.log(counter.value);
counter.increment();
console.log(counter.value);
counter.value = -10;
counter.value = 10;
console.log(counter.value);

const test = Counter.createCounter(-100);
const test2 = Counter.createCounter(100);
console.log(test2);
console.log(test2.value);