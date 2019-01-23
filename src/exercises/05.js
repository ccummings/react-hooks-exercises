// Saving a form's values to local storage
// Each time a value changes, it should be saved to localStorage
// Navigating away and then back should load the value saved in localStorage
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
import React from 'react';

function LocalForm () {
  return (
    <>
      <label htmlFor='first-name'>First Name: </label>
      <input name='first-name' type='text' />
      <br />
      <label htmlFor='last-name'>Last Name: </label>
      <input name='last-name' type='text' />
    </>
  );
}

function LocalFormExample () {
  return (
    <>
      <h1>Form localStorage</h1>
      <LocalForm />
    </>
  );
}

export default LocalFormExample;
