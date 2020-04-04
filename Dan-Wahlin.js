// https://blog.codewithdan.com/using-the-iterator-pattern-in-javascript/

const tokens = [
  { type: "heading", depth: 1, text: "Course: React Core Concepts" },
  {
    type: "paragraph",
    text:
      "In these workshop labs you'll learn about React core concepts and see how it can be used to build Single Page Applications (SPAs)."
  },
  { type: "space" },
  { type: "paragraph", text: "Topics covered include:" },
  { type: "space" },
  { type: "list_start", ordered: false, start: "", loose: false },
  { type: "list_item_start", task: false, loose: false },
  { type: "text", text: "Creating and using components" },
  { type: "list_item_end" },
  { type: "list_item_start", task: false, loose: false },
  { type: "text", text: "Working with Data Binding" },
  { type: "list_item_end" },
  { type: "list_item_start", task: false, loose: false },
  { type: "text", text: "Using Axios to retrieve data from a server" },
  { type: "list_item_end" },
  { type: "list_item_start", task: false, loose: false },
  { type: "text", text: "Routing" },
  { type: "space" },
  { type: "list_item_end" },
  { type: "list_end" }
];

tokens.forEach(token => {
  for (const iterator in token) {
    console.log(token[iterator]);
  }
});
