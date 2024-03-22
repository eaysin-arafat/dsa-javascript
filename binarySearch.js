const binarySearch = (array, target) => {
  let leftIndex = 0;
  let rightIndex = array?.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};

const arr = [-5, 3, 5, 9, 10, 13, 15];

console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 13));
console.log(binarySearch(arr, 3));

// Big-O = O(logn)
