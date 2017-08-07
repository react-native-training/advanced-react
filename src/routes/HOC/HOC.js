import React from 'react';
import SubNav from '../../components/SubNav';
import Link from '../../components/Link';

import { Route } from 'react-router-dom';

import BasicHOC from './BasicHOC';
import HOCOverridingProps from './HOCOverridingProps';
import HOCAddingLifecycle from './HOCAddingLifecycle';
import HOCStateless from './HOCStateless';
import Exercise from './Exercise';

export default class HOC extends React.PureComponent {
  render() {
    return (
      <div>
        <SubNav>
          <Link to='/hoc/basichoc' title='Basic HOC' />
          <Link to='/hoc/overriding-props' title='Overriding Props' />
          <Link to='/hoc/lifecycle' title='Adding Lifecycle Methods' />
          <Link to='/hoc/stateless' title='Stateless Components' />
          <Link to='/hoc/exercise' title='Exercise' />
        </SubNav>
        <p style={styles.title}>Higher Order Components</p>
        <div style={styles.container}>
          <Route exact path='/hoc/basichoc' component={BasicHOC} />
          <Route exact path='/hoc/lifecycle' component={HOCAddingLifecycle} />
          <Route exact path='/hoc/overriding-props' component={HOCOverridingProps} />
          <Route exact path='/hoc/stateless' component={HOCStateless} />
          <Route exact path='/hoc/exercise' component={Exercise} />
        </div>
      </div>
    )
  }
}

const styles = {
  title: {
    fontSize: 28,
    paddingLeft: 25,
  },
  container: {
    padding: 25,
    paddingTop: 0,
  },
}
