import dfclass from "./dofactory-class.js";

const items = ["one", 2, "circle", true, "Applepie"];
const iter = new dfclass(items);

// using for loop
for (let item = iter.first(); iter.hasNext(); item = iter.next()) {
  console.log(item);
}

// using each
iter.each(item => console.log(item));

/*
hasNext = () => {
    return this.index <= this.items.length;
  };
*/
// console.log(iter.first());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.previous());
