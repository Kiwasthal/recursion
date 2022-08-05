let fibonacci = (n, arr = [0]) => {
  if (n < 0) return;
  if (n === 0) return arr;
  arr.push(1);
  if (n === 1) return arr;
  arr.push(1);
  if (n === 2) return arr;
  for (let i = 2; i < n - 1; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  return arr;
};

console.log(fibonacci(8));

let fibonacciRec = n =>
  n < 2
    ? [0]
    : n < 3
    ? [0, 1]
    : fibonacciRec(n - 1).concat(
        fibonacciRec(n - 1)[n - 2] + fibonacciRec(n - 1)[n - 3]
      );

console.log(fibonacciRec(8));
