const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);

root.render(React.createElement(App));

console.log(React);

function App() {
  return (
    React.createElement(
      "article",
      null,
      React.createElement("h2", null, "Counter "),
      React.createElement("p", null, "You clicked 1 times "),
      React.createElement("button", null, "Click me "),
    )
  );
}

console.log(App());

let articleElements = document.getElementByTagName("article");
let articleElement = document.getElementByTagName("article").item(0);
console.log(articleElements);
console.log(articleElement);

// after React code has run
setTimeout(() => {
  let articleElements = document.getElementByTagName("article");
  let articleElement = document.getElementByTagName("article").item(0);
  console.log(articleElements);
  console.log(articleElement);
}, 1000);
