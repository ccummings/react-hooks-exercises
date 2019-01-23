// useEffect Hook
import React, { useState, useEffect } from 'react';

function WindowWatcher () {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  return (
    <p>The width is {width}</p>
  );
}

function UseEffectExample () {
  return (
    <>
      <h1>useEffect Example</h1>
      <WindowWatcher />
    </>
  );
}

export default UseEffectExample;
