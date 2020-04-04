export default class DanIterator {
  constructor() {
    this.currentResult = 0;
  }
  tokenIterator(tokens = []) {
    let index = -1;
    return {
      next: () => {
        index++;
        if (index < tokens.length) {
          return { token: tokens[index], index, done: false };
        } else {
          return { done: true, index };
        }
      },
      peek: () => {
        if (index + 1 < tokens.length) {
          return { token: tokens[index + 1], index: index + 1, done: false };
        } else {
          return { done: true, index };
        }
      }
    };
  }
  //     this.currentResult = this.iterator.next();
  // while (!this.currentResult.done) {
  //     const token = this.currentResult.token;
  //     if (token.type === 'heading') {
  //         switch (token.depth) {
  //            case 1: // course
  //             //    ...
  //            case 2: // lab
  //             //    ...
  //            case 3: // exercise
  //             //    ...
  //            case 4: // step
  //             //    ...
  //         }
  //     }
  //     this.currentResult = this.iterator.next();
  // }
}
