import dfclass from "./dofactory-class.js";

const items = ["one", 2, "circle", true, "Applepie"];
const iter = new dfclass(items);

console.log(iter.first());
