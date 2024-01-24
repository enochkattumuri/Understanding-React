### JSX and Thinking in Elements

[Link to the official JSX specification](https://facebook.github.io/jsx/)

JSX allows injection of actual Javascript code inside markup by wrapping it in curly braces. It helps the transpiler to distinguish variable names or logic from the string.


```
const counterOne = <Counter name={counterName} />;
```

JSX allows the usage of self closing tags.
