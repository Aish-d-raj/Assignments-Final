const numbers = [175, 50, 25];
let sub= numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log("subtraction using reduce():",sub);


sub1 = numbers.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log("subtraction using reduceRight():",sub1);