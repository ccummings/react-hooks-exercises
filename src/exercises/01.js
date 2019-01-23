// useState Hook
import React, { useState } from 'react';

function Counter () {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return <button onClick={incrementCount}>You have clicked {count} times</button>;
}

function UseStateExample () {
  return (
    <>
      <h1>useState Example</h1>
      <Counter />
    </>
  );
}

export default UseStateExample;
