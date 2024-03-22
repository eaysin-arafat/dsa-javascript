const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    return (result = n % i !== 0 ? true : false);
  }
};

const isPrimeN = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// Big-O = O(n)

const isPrimeOptimize = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// Big-O = O(sqrt(n))

console.log(isPrimeOptimize(1));
console.log(isPrimeOptimize(5));
console.log(isPrimeOptimize(4));
