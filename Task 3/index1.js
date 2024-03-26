var obj1 = { name: "person1",age: 5};
var obj2 = { age : 5, name: "person1"};

// to check no. of keys  or key length

function areobjectequal( obj1,obj2){  
var keys1 = Object.keys(obj1);
var keys2 = Object.keys(obj2);

if(keys1.length !== keys2.length)  {

    return false;
}
// to check values of each key for  
// for loop statement  (var i=0; i< keys1.length; i++){  if (obj1[keys1[i]] !== obj2[keys1[i]]){
for( var key of keys1) {
  if (obj1[key] !== obj2[key]){
    return false;
  } 
}
  return true;
}
console.log(areobjectequal(obj1,obj2));



