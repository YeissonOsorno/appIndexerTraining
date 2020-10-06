import React from 'react';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';


//Containers
import Home from './containers/Home.js';
import Signup from './components/Signup.js';



function App() {
  return (
    <Router>
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={Signup} path="/signup"/>
        </Switch>
    </Router>
  );
}

export default App;
