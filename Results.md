# Results
In all tests `insertion sort` was faster than any other sort algorithm.
`Megre sort`, `quick sort` were written with recursion usage. So they are
much slower then others. `Quick sort` is implemented in 2 ways. We can notice
that comparing elements of array with random element is better and more rational.

## There are results on my PC: 
┌─────────┬─────────────────┬─────────┬─────────────┐
│ (index) │      name       │  size   │   seconds   │
├─────────┼─────────────────┼─────────┼─────────────┤
│    0    │ 'selectionSort' │ 'short' │ 0.155445591 │
│    1    │ 'insertionSort' │ 'short' │ 0.041739393 │
│    2    │  'bubbleSort'   │ 'short' │ 0.130096638 │
│    3    │   'mergeSort'   │ 'short' │ 7.631337148 │
│    4    │  'quickFirst'   │ 'short' │ 6.085146639 │
│    5    │  'quickRandom'  │ 'short' │ 5.213578405 │
└─────────┴─────────────────┴─────────┴─────────────┘
┌─────────┬─────────────────┬──────────┬──────────────┐
│ (index) │      name       │   size   │   seconds    │
├─────────┼─────────────────┼──────────┼──────────────┤
│    0    │ 'selectionSort' │ 'middle' │ 0.520562165  │
│    1    │ 'insertionSort' │ 'middle' │ 0.068362532  │
│    2    │  'bubbleSort'   │ 'middle' │ 0.457296693  │
│    3    │   'mergeSort'   │ 'middle' │ 16.524062859 │
│    4    │  'quickFirst'   │ 'middle' │ 14.586643624 │
│    5    │  'quickRandom'  │ 'middle' │ 10.871782401 │
└─────────┴─────────────────┴──────────┴──────────────┘
┌─────────┬─────────────────┬────────┬──────────────┐
│ (index) │      name       │  size  │   seconds    │
├─────────┼─────────────────┼────────┼──────────────┤
│    0    │ 'selectionSort' │ 'long' │ 1.614311481  │
│    1    │ 'insertionSort' │ 'long' │ 0.122931133  │
│    2    │  'bubbleSort'   │ 'long' │ 1.540359598  │
│    3    │   'mergeSort'   │ 'long' │ 31.64963505  │
│    4    │  'quickFirst'   │ 'long' │ 32.296109583 │
│    5    │  'quickRandom'  │ 'long' │ 20.07700357  │
└─────────┴─────────────────┴────────┴──────────────┘