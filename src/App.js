import React, { Component } from 'react';
import Header from './components/Header';
import Context from './routes/Context/Context';
import Recompose from './routes/Recompose/Recompose';
import Animations from './routes/Animations/Animations';
import Primitives from './routes/Primitives/Primitives';
import HOC from './routes/HOC/HOC';
import ChildProps from './routes/ChildProps/ChildProps';
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
              <Route path='/primitives' component={Primitives} />
              <Route path='/hoc' component={HOC} />
              <Route path='/childprops' component={ChildProps} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
