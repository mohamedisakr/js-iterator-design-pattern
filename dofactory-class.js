export default class Iterator {
  constructor(items) {
    this.index = 0;
    this.prev = 0;
    this.items = items;
  }

  first = () => {
    this.reset();
    return this.next();
  };

  previous = () => {
    // if index > 0 && index < length
    // corner case if index = 0
    if (this.index === 0) {
      return -1;
    }

    // if index--
    return this.items[this.prev];
  };

  next = () => {
    this.prev = this.index - 1;
    return this.items[this.index++];
  };

  hasNext = () => {
    return this.index <= this.items.length;
  };

  reset = () => {
    this.prev = -1;
    this.index = 0;
  };

  each = callback => {
    for (let item = this.first; this.hasNext(); item = this.next()) {
      callback(item);
    }
  };
}
