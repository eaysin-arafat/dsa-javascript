const factorial = (n) => {
  let output = 1;
  for (let i = 2; i <= n; i++) {
    output *= i;
  }

  return output;
};

console.log("==", factorial(5));
console.log("==", factorial(1));
console.log("==", factorial(0));
