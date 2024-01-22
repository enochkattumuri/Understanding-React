const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);

let counterName = "one";

root.render(React.createElement(App));

function App() {
  const counterOne = <Counter name={counterName} />;
  const counterTwo = <Counter2 name={counterName} />;

  return (
    <section>
      <h1>Counters</h1>
      <section>
        {counterName === 'one' ? counterOne : counterTwo}
      </section>
    </section>
  );
}

function Counter({ name }) {
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>You clicked 1 times</p>
      <button>Click me</button>
    </article>
  );
}

function Counter2({ name }) {
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>Times clicked: 1</p>
      <button>Click me</button>
    </article>
  );
}

function rerender() {
  console.log("Rerendering...");
  counterName = "two";
  root.render(React.createElement(App));
}
