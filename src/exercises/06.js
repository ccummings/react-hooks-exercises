// Build a stopwatch with a start/stop and reset button
// These links may be useful
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
import React from 'react';

function StopWatch () {
  return (
    <div style={{ textAlign: 'center' }}>
      <label
        style={{
          fontSize: '5em',
          display: 'block'
        }}
      >
        TODO ms
      </label>
      <button>
        Start/Stop
      </button>
      <button>
        Clear
      </button>
    </div>
  );
}

function StopWatchExercise () {
  return (
    <>
      <h1>Stopwatch Exercise</h1>
      <StopWatch />
    </>
  );
}

export default StopWatchExercise;
