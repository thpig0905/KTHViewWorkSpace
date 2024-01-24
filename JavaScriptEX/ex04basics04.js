let array = [];

array[3] = 100;
console.log(array);
array = [1, '2' , true, NaN, {}, [100, 203, 12, 123], [], 12.1234123124, undefined, null, Infinity, function(){}];
console.log(array);
console.log(array[5][2]);

for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}

for(let i = 0; i < array.length; i++){
  console.log(`index: ${i} value: ${array[i]}`);
}