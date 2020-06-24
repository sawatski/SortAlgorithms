'use strict';
const insertionSort = array => {
  for (let i = 1, l = array.length; i < l; i++) {
    let j = i;
    const current = array[j];
    while (j > 0 && array[j - 1] > current) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
};
module.exports = { insertionSort };
