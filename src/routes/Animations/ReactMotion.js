import React from 'react';
import { Motion, spring } from 'react-motion';

/* Exercise:
*  Create a button that expands and changes its
*  background color based on the values in a separate
*  input in the component. For exaple, if the input has
*  less than 4 values, then the button is disabled, if it has
*  4 or more values, then it is enabled and animated.
*/

export default class ReactMotion extends React.PureComponent {
  state = {
    x: 0,
    y: 10,
  }
  animateMargin = () => {
    this.setState((state) => ({
      x: state.x === 0 ? 200 : 0,
      y: state.y === 10 ? 200 : 10,
    }))
  }
  render() {
    return (
      <div>
        <p>React Motion</p>
        <button onClick={this.animateMargin}>Animate</button>
        <Motion style={{ x: spring(this.state.x), y: spring(this.state.y), }}>
          {
            ({ x, y }) => {
              return (
              <div
                style={
                  Object.assign({}, styles.box, { marginTop: y, marginLeft: x })
                }
              />
            )
            }
          }
        </Motion>
      </div>
    )
  }
}

const styles = {
  box: {
    marginBottom: 20,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    transform: 'rotate(0deg)',
  },
}
