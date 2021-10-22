const testArr = [-10, -100, 4, 5, 10, -15];

const findMinItem = (arr) => {
  let min = arr[0];
  for (num of arr) {
    if (num < min) min = num;
  }
  return min;
};

const min = findMinItem(testArr);
console.log(`min number is ${min}`);
