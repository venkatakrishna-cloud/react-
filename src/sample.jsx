import React, { useState } from 'react';

function App() {
  // Declare a state variable to store the count value
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>React Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
