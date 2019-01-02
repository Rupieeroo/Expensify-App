const user = {
  name: 'Rupert Adams',
  age: 27,
  location: 'London'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const templateTwo = (
  <div>
  <h1>Count: {count}</h1>
  <button onClick={addOne}>+ 1</button>
  <button onClick={minusOne}>- 1</button>
  <button onClick={reset}>reset</button>
  </div>
);

console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+ 1</button>
    <button onClick={minusOne}>- 1</button>
    <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
