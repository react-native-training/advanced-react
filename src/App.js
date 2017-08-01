import React, { Component } from 'react';
import Header from './Header';
import Context from './Context';
import Recompose from './Recompose';
import Animations from './Animations';
import HOC from './HOC';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Animations} />
              <Route path='/animations' component={Animations} />
              <Route path='/recompose' component={Recompose} />
              <Route path='/context' component={Context} />
              <Route path='/hoc' component={HOC} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
