### Props
Props are arguments to the function components in React.

When React sees function components, it calls them, since they are functions.
While calling them, React passes certain arguments to these functions. These
arguments are called props.

The second argument in the `React.createElement` function is the props object.

```
React.createElement("h1", null, "Counters"),
// here the props object is null
```

```
React.createElement("h1", { name: 'One' }, "Counters"),
// here the props object is { name: 'One' }
```

#### :warning: Important

Changing the `props` object does not work.

```
function Counter(props) {
  props.name = 'Three'; // This does not work
  return (
    React.createElement(
      "article",
      null,
      React.createElement("h2", null, "Counter ", props.name),
      React.createElement("p", null, "You clicked 1 times "),
      React.createElement("button", null, "Click me "),
    )
  );
}
```

In Javascript, an object can be prevented from being changed by freezing it.

```
Object.freeze(obj);
// freezes the obj object and prevents it from being changed
```

On inspecting the code, it is clear that the `props` object is being frozen by
React. If the object passed to the function is immutable, then the function is
pure.

#### Immutability
Something that is unable to be changed

However, this works:
```
function Counter({ name }) {
  name = 'Three'; // this works since the variable name is not frozen
  return (
    React.createElement(
      "article",
      null,
      React.createElement("h2", null, "Counter ", name),
      React.createElement("p", null, "You clicked 1 times "),
      React.createElement("button", null, "Click me "),
    )
  );
}
```

> NOTE: Be careful of mutating props after destructuring.
