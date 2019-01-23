// useRef Hook
import React, { useRef } from 'react';

function FocusableInput () {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type='text' />
      <button onClick={focusInput}>Focus the input</button>
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
