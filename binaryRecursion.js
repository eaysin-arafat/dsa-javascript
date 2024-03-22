const binarySearchRecursion = (array, target) => {
  return search(array, target, 0, array?.length - 1);
};

const search = (array, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === array[middleIndex]) {
    return middleIndex;
  }

  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rightIndex);
  }
};

const array = [3, 5, 6, 9, 23, 33, 54, 67];

console.log(binarySearchRecursion(array, 5));
console.log(binarySearchRecursion(array, 23));
console.log(binarySearchRecursion(array, 67));

// Big-O = O(logn)
