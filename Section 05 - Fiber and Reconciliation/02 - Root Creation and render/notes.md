### Root Creation and render

```
const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
console.log(root);
```

`root` is of type `ReactDOMRoot`. React adds the `render` method to this object
using prototypical inheritance.

```
root.render(<App />);
```

Here, `App` is made the child of the `root` element.
