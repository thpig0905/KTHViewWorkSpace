let cat = {
  name : '나비',
  age : 3
}

function getValue(obj, key){
  return obj[key];
}
function addValue(obj, key, value){
  obj[key] = value;
  return obj;
}
function removeValue(obj, key){
  delete obj[key];
  return obj;
} 

console.log(getValue(cat, 'name'));
console.log(addValue(cat, 'owner', '김태하'));
console.log(removeValue(cat, 'owner'));