// https://loige.co/javascript-iterator-patterns/

// implement Fibonacci sequence as a generator
function* fib(max = Number.MAX_SAFE_INTEGER) {
  let n1 = 0;
  let n2 = 0;
  let next = 1;
  while (next <= max) {
    yield next;
    let prev = n2;
    n2 = next;
    n1 = prev;
    next = n1 + n2;
  }
}

let fibGen = fib();
console.log([...fibGen]);

// let fibGen = fib();
// for (const current of fibGen) {
//   console.log(current);
// }

// let fibGen = fib();
// let result = fibGen.next();
// while (!result.done) {
//   console.log(result.value);
//   result = fibGen.next();
// }

/*
const genFib = (max = Number.MAX_SAFE_INTEGER) => {
  // initialize default values in the scope
  let n1 = 0;
  let n2 = 0;

  // returns an anonymous function that will return the next element
  // every time that it is called
  return {
    next: () => {
      // calculates the next value
      let next = n2 === 0 ? 1 : n1 + n2;
      let prev = n2;
      n2 = next;
      n1 = prev;

      // if we reached the upper bound return null (iteration completed)
      let done = false;
      if (next >= max) {
        next = undefined;
        done = true;
      }
      return { value: next, done };
    }
  };
};

const iter = genFib(10);
let result = iter.next();
console.log(result);

while (!result.done) {
  console.log(result.value);
  result = iter.next();
}
*/

// console.log(iter);

/*
const f = genFib(6); // limit the sequence to numbers below 6
console.log(f()); // 1
console.log(f()); // 1
console.log(f()); // 2
console.log(f()); // 3
console.log(f()); // 5
console.log(f()); // null
console.log(f()); // null
console.log(f()); // null
*/

// prints all the numbers of the sequence below MAX_SAFE_INTEGER
// const f2 = genFib();
// console.log(f2);

// let current;
// while ((current = f2()) !== null) {
//   console.log(current);
// }
