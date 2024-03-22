const bubbleSortAssending = (array) => {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < array?.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let firstIndex = array[i];
        array[i] = array[i + 1];
        array[i + 1] = firstIndex;
        isSwapped = true;
      }
    }
  } while (isSwapped);
};
const bubbleSortDissending = (array) => {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < array?.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        let firstIndex = array[i + 1];
        array[i + 1] = array[i];
        array[i] = firstIndex;
        isSwapped = true;
      }
    }
  } while (isSwapped);
};

const array = [3, 5, 6, 9, 23, 33, 54, 67];
console.log(bubbleSortDissending(array));
console.log(array);

// Big-O = O(n^2)
