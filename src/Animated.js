import React from 'react';

import Animated from 'animated';

/* Exercise:
*  
*  
*  
*/

export default class AnimatedExample extends React.PureComponent {
  state = {
    animated: false,
  }
  render() {
    return (
      <Animated.div>
        <p>Animated</p>
      </Animated.div>
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
