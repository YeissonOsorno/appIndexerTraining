import React from 'react';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';

//Containers
import Home from './containers/Home.js';



function App() {
  return (
    <Router>
        <Switch>
            <Route exact component={Home} path="/"/>
        </Switch>
    </Router>
  );
}

export default App;
