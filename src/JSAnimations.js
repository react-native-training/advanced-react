import React from 'react';

/* Exercise:
*  Create a form that expands when focused.
*  Hint: use refs + an event listener (this.someRef.addEventListener)
*  Hint: use focus and blur
*/

export default class GlamorAnimations extends React.PureComponent {
  state = {
    scaled: false,
  }
  animate = () => {
    this.setState((state) => ({
      scaled: !state.scaled,
    }))
  }
  render() {
    return (
      <div>
        <p>JavaScript Animations</p>
        <button onClick={this.animate}>Animate</button>
        <div
          style={Object.assign({}, styles.box, this.state.scaled && styles.scaled)}
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
  scaled: {
    transform: 'scale(.2)',
  },
}
