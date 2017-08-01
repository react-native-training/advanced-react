import React from 'react';
import { Link, Route } from 'react-router-dom';
import CSSAnimations from './CSSAnimations';
import GlamorAnimations from './GlamorAnimations';
import ReactMotion from './ReactMotion';
import Animated from './Animated';

export default class Animations extends React.PureComponent {
  render() {
    return (
      <div>
        <div style={styles.subNav}>
          <Link to='/animations/css' style={styles.link}>
            CSS
          </Link>
          <Link to='/animations/glamor' style={styles.link}>
            Glamor
          </Link>
          <Link to='/animations/react-motion' style={styles.link}>
            React Motion
          </Link>
          <Link to='/animations/animated' style={styles.link}>
            Animated
          </Link>
        </div>
        <p style={styles.title}>Animations</p>
        <div style={styles.container}>
          <Route exact path='/animations' component={CSSAnimations} />
          <Route path='/animations/css' component={CSSAnimations} />
          <Route path='/animations/glamor' component={GlamorAnimations} />
          <Route path='/animations/react-motion' component={ReactMotion} />
          <Route path='/animations/animated' component={Animated} />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 25,
    paddingTop: 0,
  },
  title: {
    fontSize: 28,
    paddingLeft: 25,
  },
  link: {
    textDecoration: 'none',
    marginRight: 20,
    color: '#666'
  },
  subNav: {
    padding: 20,
    backgroundColor: '#ededed',
    borderBottom: '1px solid rgba(0,0,0,.1)',
  }
}
