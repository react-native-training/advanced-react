import React from 'react';
import { Route } from 'react-router-dom';
import CSSAnimations from './CSSAnimations';
import JSAnimations from './JSAnimations';
import ReactMotion from './ReactMotion';
import Animated from './Animated';
import SubNav from '../../components/SubNav';
import Link from '../../components/Link';

export default class Animations extends React.PureComponent {
  render() {
    return (
      <div>
        <SubNav>
          <Link to='/animations/css' title='CSS' />
          <Link to='/animations/js' title='JSAnimations' />
          <Link to='/animations/react-motion' title='React Motion' />
          <Link to='/animations/animated' title='Animated' />
        </SubNav>
        <p style={styles.title}>Animations</p>
        <div style={styles.container}>
          <Route exact path='/animations' component={CSSAnimations} />
          <Route path='/animations/css' component={CSSAnimations} />
          <Route path='/animations/js' component={JSAnimations} />
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
}
