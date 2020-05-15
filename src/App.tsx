import React, { FunctionComponent, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { OrderCorner } from './pages/OrderCorner';
import { Home } from './pages/Home';
import { PizzaStore } from './store/PizzaStore';
import { OrderReceipt } from './pages/OrderReceipt';

const App: FunctionComponent<any> = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Fragment>
            <div className="header">
              <Link to="/">
                <h1>Pizza Space</h1>
              </Link>
            </div>
            <PizzaStore>
              <div className="content">
                <Route path="/order" component={OrderCorner}/>
                <Route path="/receipt/:id" component={OrderReceipt}/>
                <Route exact path="/" component={Home}/>
              </div>
            </PizzaStore>
          </Fragment>
        </Switch>
      </Router>
      <div className="footer">
        <div className="footer_resources">
        <div>Photos taken from <a href="https://unsplash.com/">unsplash.com</a></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
        </div>
      </div>
    </div>
  );
}

export default App;
