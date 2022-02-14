import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';


function App() {
 
  return (
    <Router>
        <Switch>
        <Route component={HomePage} />
        </Switch>
    </Router>
  );
}

export default App;
