import React from 'react';

import Animated from 'animated/lib/targets/react-dom';

/* Exercise:
*  Use interpolation to create a button that transforms in some way when hovered over.
*/

export default class AnimatedExample extends React.PureComponent {
  state = {
    animated: false,
  }

  animatedMarginLeft = new Animated.Value(0);

  updateMargin = () => {
    Animated.timing(
      this.animatedMarginLeft,
      {
        duration: 300,
        toValue: this.state.animated ? 0 : 300,
      }
    ).start()
    this.setState((state) => ({ animated: !state.animated }))
  }


  render() {

    return (
      <div>
        <p>Animated</p>
        <button onClick={this.updateMargin}>Update Margin</button>
        <Animated.div style={Object.assign({}, styles.box, { marginLeft: this.animatedMarginLeft })} />
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
}
