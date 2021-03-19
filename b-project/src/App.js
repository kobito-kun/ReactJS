import Section from './components/Section';
import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import SectionPage from './components/SectionPage';
import ItemPage from './components/ItemPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/section" exact component={Section} />
        <Route path="/section/:id" exact component={SectionPage} />
        <Route path="/section/:id/:idItem" exact component={ItemPage} />
      </Switch>
    </Router>
  );
}

export default App;
