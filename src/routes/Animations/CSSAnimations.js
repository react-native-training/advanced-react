import React from 'react';

/* Exercise:
*  Create a div that changes opacity when hovered over.
*  Hint: use refs + an event listener (this.someRef.addEventListener)
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
        <button onClick={this.animate}>Animate</button>
        <div className={['box', this.state.animated && 'box-animated'].join(' ')} />
      </div>
    )
  }
}
