import React from 'react';

/* Exercise:
*  Create an animated input that expands when focused and
*  contracts when unfocused.
*  Hint: use onmouseenter and onmouseleave
*/

export default class CSSAnimations extends React.PureComponent {
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
        <p>CSSAnimations</p>
        <button
          onClick={this.animate}
        >Animate</button>
        <div className={['box', this.state.animated && 'box-animated'].join(' ')} />
      </div>
    )
  }
}
