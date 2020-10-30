import React from 'react';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';


//Containers
import Home from './containers/Home.js';
import Signup from './components/Signup.js';
import Themes from './modules/Themes/Themes.js';



function App() {
  return (
    <Router>
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={Signup} path="/signup"/>
             <Route exact component={Themes} path="/themes"/>
        </Switch>
    </Router>
  );
}

export default App;
