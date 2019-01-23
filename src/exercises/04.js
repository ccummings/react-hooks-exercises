// useRef Hook
import React from 'react';

function FocusableInput () {
  return (
    <>
      <input type='text' />
      <button>Focus the input</button>
    </>
  );
}

function UseRefExample () {
  return (
    <>
      <h1>useRef Example</h1>
      <FocusableInput />
    </>
  );
}

export default UseRefExample;
