'use strict';

const quickFirst = array => {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quickFirst(left).concat(pivot, quickFirst(right));
};

const quickRandom = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const left = [];
  const right = [];
  const equal = [];
  let counter = 0;
  for (const val of arr) {
    counter++;
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return quickRandom(left).concat(pivot, quickRandom(right));
};
module.exports = { quickFirst, quickRandom };
