import React from 'react';
import SubNav from '../../components/SubNav';
import Link from '../../components/Link';

import { Route } from 'react-router-dom';

import Basic from './Basic';
import Func from './Func';
import RenderProps from './RenderProps';
import Exercise from './Exercise';

const ChildProps = () => (
  <div>
    <SubNav>
      <Link to='/childprops/basic' title='Basic Child Props' />
      <Link to='/childprops/render' title='Render Props' />
      <Link to='/childprops/func' title='Function as Child' />
      <Link to='/childprops/exercise' title='Exercise' />
    </SubNav>
    <p style={styles.title}>Child Props</p>
    <div style={styles.container}>
      <Route exact path='/childprops/basic' component={Basic} />
      <Route exact path='/childprops/render' component={RenderProps} />
      <Route exact path='/childprops/func' component={Func} />
      <Route exact path='/childprops/exercise' component={Exercise} />
    </div>
  </div>
)

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

export default ChildProps;
