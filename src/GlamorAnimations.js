import React from 'react';
import { css } from 'glamor';

/* Exercise:
*  Create a form that expands when focused.
*  Hint: use refs + an event listener (this.someRef.addEventListener)
*  Hint: use focus and blur
*/

export default class GlamorAnimations extends React.PureComponent {
  state = {
    animated: false,
  }
  animate = () => {
    this.setState((state) => ({
      animated: !state.animated,
    }))
  }
  render() {
    return (
      <div>
        <p>GlamorAnimations</p>
        <button onClick={this.animate}>Animate</button>
        <div
          {...css([styles.box, this.state.animated && styles.boxAnimated])}
        />
      </div>
    )
  }
}

const styles = {
  box: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    transition: 'all .5s linear'
  },
  boxAnimated: {
    transform: 'scale(.2)',
  },
}
