const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);

root.render(React.createElement(App));

console.log(React);
// console.log(ReactDOM);

function App() {
  // To verify that React is also calling this function
  console.log('called app');

  // legacy method to create React elements
  return React.createElement("button", null, "Click me!");
}

console.log(App());

console.log(React.createElement(App));
