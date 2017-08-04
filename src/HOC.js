import React from 'react';
import SubNav from './SubNav';
import Link from './Link';

import { Route } from 'react-router-dom';

import HOCAddingProps from './HOCAddingProps';
import HOCAddingLifecycle from './HOCAddingLifecycle';
import HOCStateless from './HOCStateless';

export default class HOC extends React.PureComponent {
  render() {
    return (
      <div>
        <SubNav>
          <Link to='/hoc/lifecycle' title='Adding Lifecycle Methods' />
          <Link to='/hoc/adding-props' title='Adding Props' />
          <Link to='/hoc/stateless' title='Stateless Components' />
        </SubNav>
        <p style={styles.title}>Higher Order Components</p>
        <div style={styles.container}>
          <Route exact path='/hoc/lifecycle' component={HOCAddingLifecycle} />
          <Route exact path='/hoc/adding-props' component={HOCAddingProps} />
          <Route exact path='/hoc/stateless' component={HOCStateless} />
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
