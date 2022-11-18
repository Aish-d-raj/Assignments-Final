let n= [175, 50, 25];
//Addition
let initialValue = 0;

let sum = n.reduce((totalValue, currentValue) => {
    
    return totalValue + currentValue
}, initialValue);

console.log("Addition: ", sum);

//Average
average = n.reduce(function (avg, value, _, { length }) {
    return avg + value / length;
}, 0);

console.log("average: ",average);

//Subtraction
let sub = n.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log("Subtration:",sub);