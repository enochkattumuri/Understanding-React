### Element properties
There are certain elements that React provides, corresponding to the DOM
elements.

Example:
```
React.createElement("button", null, null)
```
creates a React button element, corresponding to which a `button` element is
created and added to the real DOM.

The `button` element in the real DOM supports certain attributes.

For example, to any DOM element `element`, the `class` attribute can be added
using the browser api in the following way:
```
element.className = <class-name>;
```

> Notice the difference in `class` and `className`. This is because `class` is a reserved Javascript keyword

:question:
How can HTML attributes be passed to the DOM element that is created
declaratively in React?

This can be done using props. Passing props, with property name as attribute
name, and property value as the desired attribute value.

```
React.createElement("button", { className: "btn", name="close" }, null)
```
creates a real DOM element as follows:
```
<button class="btn" name="close">
```
