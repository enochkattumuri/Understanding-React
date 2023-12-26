### Template logic
When the React DOM tree is updated, the entire DOM tree is not re-rendered. Only
that part of the real DOM tree corresponding to the changed React DOM is
re-rendered.

Updating the entire DOM tree is expensive. It requires work on the browser and
slows down the app.

```
function rerender() {
  console.log("Rerender ....");
  counterName = "Two";
  root.render(React.createElement(App));
}
```

When `rerender()` is called, React calls all the functions right from `App` and
updates the virtual DOM.

The real DOM is then compared and then updated to match the virtual with minimal
possible changes to the real DOM.

Even though the entire React DOM tree is recreated, it is not expensive, because it is very light and simple. Each node in the React DOM is a POJO.

Each time React renders, it compares the current DOM tree with the current React DOM tree and then updates the DOM tree accordingly.
