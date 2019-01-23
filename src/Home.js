import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
  return (
    <>
      <h1>React Hooks Exercises</h1>
      <ul className='unstyled'>
        <li><Link to='/01'>useState</Link></li>
        <li><Link to='/02'>Build a Custom Hook</Link></li>
        <li><Link to='/03'>useEffect</Link></li>
        <li><Link to='/04'>useRef</Link></li>
        <li><Link to='/05'>Form localStorage</Link></li>
        <li><Link to='/06'>Stopwatch</Link></li>
      </ul>
    </>
  );
}

export default Home;
