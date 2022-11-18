//parseFloat documentation

function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));


//parseFloat examples

function testingparseFloat(t) {
  return parseFloat(t);
}

console.log(testingparseFloat(3.14));
console.log(testingparseFloat('314e-2'));
//parseFloat ignores invalid charecters other than the values itself that's why the output works
console.log(testingparseFloat('FF2'));
//if the argument's first charecter can not be converted to a number the parseFloat returns NaN
