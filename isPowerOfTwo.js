// const isPowerOfTwo = (n) => {
//   for (let i = 2; i <= n; i++) {
//     if (i * i === n) {
//       console.log("i * i", i * i);
//       return true;
//     }
//   }
//   return false;
// };

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
};

// console.log(isPowerOfTwo(4));

// Big-O = O(logn)

const isPowerOfTwoBitWise = (n) => {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwoBitWise(5));
// Big-O = O(1)
