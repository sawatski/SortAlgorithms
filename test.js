'use strict';

const { short, middle, long } = require('./arrays');
const { quickFirst, quickRandom } = require('./quickSort');
const { mergeSort } = require('./mergeSort');
const { insertionSort } = require('./insertionSort');
const { bubbleSort } = require('./bubbleSort');
const { selectionSort } = require('./selectionSort');

console.log(
  '\n' + ' short.length = ' + short.length + '\n',
  'middle.length = ' + middle.length + '\n',
  'long.length = ' + long.length
);

const result1 = [];
const result2 = [];
const result3 = [];

const LOOP_COUNT = 10000;

const speedTest = (fn, args, count, size) => {
  const name = fn.name;
  const begin = process.hrtime();
  for (let i = 0; i < count; i++) {
    fn(args);
  }
  const end = process.hrtime(begin);
  const diff = end[0] * 1e9 + end[1];
  const seconds = diff / 1e9;
  if (size === 'short') result1.push({ name, size, seconds });
  else if (size === 'middle')
    result2.push({ name, size, seconds });
  else result3.push({ name, size, seconds });
};

speedTest(selectionSort, short, LOOP_COUNT, 'short');
speedTest(insertionSort, short, LOOP_COUNT, 'short');
speedTest(bubbleSort, short, LOOP_COUNT, 'short');
speedTest(mergeSort, short, LOOP_COUNT, 'short');
speedTest(quickFirst, short, LOOP_COUNT, 'short');
speedTest(quickRandom, short, LOOP_COUNT, 'short');

console.table(result1);

speedTest(selectionSort, middle, LOOP_COUNT, 'middle');
speedTest(insertionSort, middle, LOOP_COUNT, 'middle');
speedTest(bubbleSort, middle, LOOP_COUNT, 'middle');
speedTest(mergeSort, middle, LOOP_COUNT, 'middle');
speedTest(quickFirst, middle, LOOP_COUNT, 'middle');
speedTest(quickRandom, middle, LOOP_COUNT, 'middle');

console.table(result2);

speedTest(selectionSort, long, LOOP_COUNT, 'long');
speedTest(insertionSort, long, LOOP_COUNT, 'long');
speedTest(bubbleSort, long, LOOP_COUNT, 'long');
speedTest(mergeSort, long, LOOP_COUNT, 'long');
speedTest(quickFirst, long, LOOP_COUNT, 'long');
speedTest(quickRandom, long, LOOP_COUNT, 'long');

console.table(result3);
