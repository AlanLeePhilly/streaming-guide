import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import ProgramsContainer from './containers/ProgramsContainer';
import ProgramShowContainer from './containers/ProgramShowContainer';
import ProgramFormContainer from './containers/ProgramFormContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' >
        <IndexRoute component={ProgramsContainer} />
        <Route path='programs/new' component={ProgramFormContainer} />
        <Route path='programs/:id' component={ProgramShowContainer} />
      </Route>
    </Router>
  )
}

export default App;
