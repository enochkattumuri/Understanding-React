### Pure Function
A function that:
1. For the same input always gives the same output
2. Causes no side effects

#### Example of a pure function

```
let counter = { name: 'Counter Value'};
let counterValue = 1;
```

```
function pureCounter(ctr, value) {
  return `${ctr.name} ${value}`;
}
```
#### Example of an impure function

```
function notPureCounter(ctr, value) {
  // mutating a param that is passed by reference
  ctr.name = ctr.name + ' suffix';
  // mutating a global variable
  counterValue = counterValue + 1;
  return `${ctr.name} ${value}`;
}
```

Both the operations cause side effects, leading to different outputs for the same inputs.

This leads to difficult bugs. Impure functions lead to buggy, difficult-to-manage code.
