//Spread operators
let arr = [5, 4, 9];
let arr2 = [6, 8, 12]; 
let merged = [1, ...arr, 3, ...arr2];
console.log("Spread operator example: ",merged);

//Rest operators
function add(one,two,...args){
    console.log(one);
    console.log(two);
    console.log(args);
}
console.log("Rest operator example: ");
add(1,2,3,4,5,6)

//Array Destructuring
const colors=['Red','Green','Blue']
const[color1,color2,color3]= colors;
console.log("Array Destructuring example: ");
console.log(color1);
console.log(color2);
console.log(color3);