const arrayNthIndex = (t, array) => {
  for (let i = 0; i < array?.length; i++) {
    if (array[i] === t) {
      return i;
    }
  }
  return -1;
};

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(arrayNthIndex(55, array));
