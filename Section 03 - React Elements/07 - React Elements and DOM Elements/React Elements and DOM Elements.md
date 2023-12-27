### React Elements and DOM Elements
React Element tree - What we want the DOM to look like
DOM Element tree - What the user is experiencing right now

What we mean by rendering in the context of React?
React updating the real DOM tree to match the React tree

React's imperative code is run asynchronously. It does not block the rest of the
Javascript code from running. Once the engine is again available for running
more code, the React code is run

---
```
let articleElements = document.getElementByTagName("article");
let articleElement = document.getElementByTagName("article").item(0);
console.log(articleElements);
console.log(articleElement);
```
When initially logged to the console, `articleElements` shows up as an empty
array in minimized form and `articleElement` is `null`

Note: On expansion, the `articleElements` array does have the value, but the
value is updated once the React code has run

---
```
setTimeout(() => {
  let articleElements = document.getElementByTagName("article");
  let articleElement = document.getElementByTagName("article").item(0);
  console.log(articleElements);
  console.log(articleElement);  
}, 1000);
```
On running the same code using a `setTimeout`, both `articleElements` and
`articleElement` have the expected value, since React has rendered the elements
by this time
