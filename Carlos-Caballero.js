// https://www.carloscaballero.io/understanding-iterator-pattern-in-javascript-typescript-using-symbol-iterator/

class MyIterable {
  [Symbol.iterator]() {
    let index = 0;
    const iterator = {
      next() {
        index++;
        if (index < 3) {
          return { value: index, done: false };
        }
        return { value: null, done: true };
      }
    };
    return iterator;
  }
}

const iterable = new MyIterable();
// iterable.next()

// const iterable = {
//   [Symbol.iterator]() {
//     let index = 0;
//     const iterator = {
//       next() {
//         index++;
//         if (index < 3) {
//           return { value: index, done: false };
//         }
//         return { value: null, done: true };
//       }
//     };
//     return iterator;
//   }
// };
