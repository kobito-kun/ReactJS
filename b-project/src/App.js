import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import MainPage from './Pages/MainPage'
import AnimePage from './Pages/AnimePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:type/:mal_id" exact component={AnimePage} />
      </Switch>
    </Router>
  );
}

export default App;
