import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import UseStateExercise from './exercises/01';
import CustomHookExercise from './exercises/02';
import UseEffectExercise from './exercises/03';
import UseRefExercise from './exercises/04';
import LocalFormExercise from './exercises/05';
import StopWatchExercise from './exercises/06';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/01' component={UseStateExercise} />
        <Route path='/02' component={CustomHookExercise} />
        <Route path='/03' component={UseEffectExercise} />
        <Route path='/04' component={UseRefExercise} />
        <Route path='/05' component={LocalFormExercise} />
        <Route path='/06' component={StopWatchExercise} />
      </Switch>
    </Router>
  );
}

export default App;
