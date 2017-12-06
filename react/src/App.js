import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import ProgramsContainer from './containers/ProgramsContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={ProgramsContainer} />
      </Route>
    </Router>
  )
}

export default App;
