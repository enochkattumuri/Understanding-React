### React
React js file can be thought of as containing the fake DOM, the fake elements
that React has set up for us to use.

### React DOM
React DOM can be thought of as containing the imperative code, that looks at the
fake simple Javascript objects created by React and updates the real DOM.

### React elements
Javascript objects that React has defined to represent real DOM elements or collections of real DOM elements.

#### Explanation of code
```
const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
```
Specifying where `root` is, i.e where React can start adding elements

---

```
root.render(React.createElement(App));
```
Notice that here the function is not called. It is turned into an element. `App` is turned into a custom React element and React would then call that function.

---

```
function App() {
  return React.createElement("button", null, "Click me!");
}

console.log(App());
```
This function `App` creates a plain old JS object, which is called by React as a React element.

---
Generated React element
```
$$typeof: Symbol(react.element)
key: null
props: {children: 'Click me!'}
ref: null
type: "button"
_owner: null
_store: {validated: false}
_self: null
_source: null
[[Prototype]]: Object
```

The React element that is outputted is pretty much smaller in comparison to a real DOM element. It is lightweight and much smaller. React has created a simple collection of elements, a simple tree structure, then used it to create real DOM elements, which are evident on the screen.

---

```
console.log(React.createElement(App));
```
Here the type would be `App()`  
React would then know that this particular node is a function, and then it'll call it to get what it is returning

---

#### Conclusion
A tree of React elements is a tree of simple objects which have types. A type
could be a function or a string representing real DOM elements. If the type is a
function, it could be called to return even more React elements.
