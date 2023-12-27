### React Element Trees
A data structure of POJOs

#### Real DOM Tree
Complex objects used by the browser in order to render to the screen a website
or web application.

#### Real DOM Tree
A tree of simple objects used by React to represent the real DOM tree, but they
do not do anything without React's imperative code. It is a fake tree, virtual
and simplistic. It gives us an idea of how the real DOM tree looks like.

---
```
React.createElement(
  "article",
  null,
  React.createElement("h2", null, "Counter "),
  React.createElement("p", null, "You clicked 1 times "),
  React.createElement("button", null, "Click me "),
)
```
This created a tree of simple JS objects, which are then used by the
browser to create the real DOM tree.
```
$$typeof: Symbol(react.element)
key: null
props:
  children: Array(3)
    0: {$$typeof: Symbol(react.element), type: 'h2', key: null, ref: null, props: {…}, …}
    1: {$$typeof: Symbol(react.element), type: 'p', key: null, ref: null, props: {…}, …}
    2: {$$typeof: Symbol(react.element), type: 'button', key: null, ref: null, props: {…}, …}
    length: 3
    [[Prototype]]: Array(0)
  [[Prototype]]: Object
ref: null
type: "article"
_owner: null
_store: {validated: false}
_self: null
_source: null
[[Prototype]]: Object
```
