/* What is null coalescing  operator in JavaScript? 
->The null coalescing is a logical operator in JavaScript that we use between 
two data types.

-> The operator checks the two data types and if the first one is null or undefined 
it returns the second data type. 
Otherwise, if the first data type is not null and not undefined ,
that first data type gets returned instead of the second data type. */
let m=null;
let n="Krish";

let setName1= m ?? "Paris";
let setName= n ?? "Paris";
console.log(setName1);
console.log(setName);

/*What is Optional Chaining Operator?
-> The optional chaining operator accesses an object's property or calls a function. 
If the object is undefined or null, it returns undefined instead of throwing an error. */
const adventurer = {
    name: 'Alice',
    catname: 'Dinah'
    
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  console.log(adventurer.someNonExistentMethod?.());


  /*What is  immutability in JavaScript? 
  ->An immutable value is that after it has been created, it can never changed.*/
  var str1 = 'Hello, there!';
var str2 = str1.slice(0, 5);
console.log(str1);
console.log(str2);
