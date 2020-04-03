export default class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  first = () => {
    this.reset();
    return this.next();
  };

  next = () => {
    return this.items[this.index++];
  };

  hasNext = () => {
    return this.index < this.items.length;
  };

  reset = () => {
    this.index = 0;
  };
}
