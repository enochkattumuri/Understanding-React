### Fiber, Fiber Nodes and Fiber Trees

#### DOM Tree
Sets of complex objects that are used by the browser to show us what
we see or interact with on the web pages and web applications

#### React Element Tree
Sets of simple objects built using JSX, used by React code,
which call various functions that make up components and ultimately generate a
tree of objects that can be used to express what we want the DOM to look like.

#### Fiber Tree
Sets of simple objects known as Fiber Nodes that are used by React's code both
to store information and determine what works  (updating the DOM) needs to be done.

> The React Element tree is disposed of and keeps being re-rendered, recalling our
functions and returning the React Elements. The Fiber tree sticks around. It is
not destroyed, not recreated, only updated. It can therefore be used to store
information called state. It can be used as a middle man between the React DOM
tree and the DOM tree.

> The Fiber tree is a copy of the React Element tree from a structural
perspective

```
ReactDOMRoot.prototype.render = function(children) {
  ...
  ...
  updateContainer(children, root, null, null);
}
```

`render` method calls `updateContainer` rather than creating a new Fiber tree.

```
const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
console.log(root);

root.render(<App />);
console.dir(rootNode);
```

On expanding the objects in the console, it can be seen that the DOM element has
a reference to the Fiber Node and the ReactDOMRoot has a reference to the DOM
element.
