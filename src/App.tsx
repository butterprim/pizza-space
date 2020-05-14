import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { OrderCorner } from './containers/OrderCorner';
import { Home } from './containers/Home/Home';
import { PizzaStore } from './store/PizzaStore';

function App() {

  return (
    <div className="app">
        <Router>
          <Switch>
            <PizzaStore>
              <div className="header">
                <Link to="/">
                  <h1>Pizza Space</h1>
                </Link>
              </div>
              <div className="content">
                <Route path="/order" component={OrderCorner}/>

                <Route exact path="/">
                  <Home/>
                </Route>
              </div>
            </PizzaStore>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
