### Fragment and HTML Authoring

[Link to the official HTML specification](https://html.spec.whatwg.org/)

Every function component returns a single React element that contains the
children. So, every time there needs to be one HTML element that is the root
element. Good HTML authoring requires that the right element is used.

The `div` and `span` elements have no specific meaning at all.
`div` is only to be used as an element of last resort.

Use `div` as the root element in functions not only is wrong semantics, but it
also adds extra layers/levels to the DOM tree.

Despite being a readability and maintenance issue, it is also a performance
issue. The deeper the DOM tree, the slower the webpage. More DOM elements means
more things for the browser to look through and figure out how to lay out the
page and also slows CSS. The CSS has to essentially search the DOM tree for
elements and the deeper the tree, more is the time taken to search it.

#### JSX Fragment `<></>`
The JSX fragment adds its children to the DOM tree and it itself is not added
as an element to the DOM tree, preventing the depth of the DOM tree increasing
unnecessarily.

```
function App() {
  const counterOne = <Counter name={counterName} />;
  const counterTwo = <Counter2 name={counterName} />;

  return (
    <> // replaced section with fragment
      <h1>Counters</h1>
      <section>
        {counterName === 'one' ? counterOne : counterTwo}
      </section>
    </>
  );
}
```

Even though the JSX elements are not semantic, they are converted into HTML
elements which are semantic.
