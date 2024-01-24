let num = 10;
console.log(num == 10);
console.log(num != 10);
console.log(num > 10);
console.log(num >= 10);
console.log(num < 10);
console.log(num <= 10);

console.log('---------------------')
console.log(num == '10');
console.log(num != '10');
console.log(true == true);
console.log(true == 'true');

let test = 10;
console.log(test + '' + 10);
console.log(typeof (test + ""));

console.log(typeof test);

test = (1000).toString();
console.log(typeof test);
console.log(test + 1000);
let test2 = (true).toString();
console.log(true == test2);

let num1 = num + '';
num1 = num1.toString();

let num2 = '10';
num2 = +num2;
num2 = num2*1;
num2 = parseInt('100');