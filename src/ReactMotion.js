import React from 'react';

/* Exercise:
*  
*  
*  
*/

export default class ReactMotion extends React.PureComponent {
  state = {
    animated: false,
  }
  render() {
    return (
      <div>
        <p>React Motion</p>
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
