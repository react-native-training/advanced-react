import React from 'react';
import PropTypes from 'prop-types';

/* Exercise:
*  Create a container component that receives an onClick function as a prop,
*  and passes the function down two levels to a button
*  eg.:
*  <Container onClick={someFunction}>
*    // Child components //
*  </Container>
*/


export default class Context extends React.Component {
  // set childContextTypes in parent
  static childContextTypes = {
    name: PropTypes.string,
  }
  // call getChildContext in parent
  getChildContext() {
    return {
      name: 'Nader Dabit',
    }
  }
  logFormData = (formData) => {
    console.log('formData:', formData)
  }
  render() {
    return (
      <div>
        <p style={styles.title}>Context</p>
        <Child1 />
      </div>
    )
  }
}

class Child1 extends React.Component {
  render() {
    return (
      <Child2 />
    )
  }
}

const Child2 = (props, context) => (
  <div style={styles.child2}>
    <p>Child2</p>
    <p>Name: {context.name}</p>
  </div>
)
Child2.contextTypes = {
  name: PropTypes.string,
}

const styles = {
  title: {
    fontSize: 34,
    padding: 25,
    margin: 0,
  },
  child2: {
    margin: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#cacaca'
  }
}
