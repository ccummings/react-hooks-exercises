// Building a custom hook
import React, { useState } from 'react';

function Counter () {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return <button onClick={incrementCount}>You have clicked {count} times</button>;
}

function CustomHookExample () {
  return (
    <>
      <h1>Build a Custom Hook</h1>
      <Counter />
    </>
  );
}

export default CustomHookExample;
