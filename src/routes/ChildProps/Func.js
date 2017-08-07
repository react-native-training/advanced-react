import React from 'react';

class CurrentMousePosition extends React.Component {
  state = {
    x: '',
    y: '',
  }
  componentDidMount() {
    console.log('componentDidMount')
    window.addEventListener('mousemove', this.onmousemove)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    window.removeEventListener('mousemove', this.onmousemove)
  }
  onmousemove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    this.setState(() => ({ x, y }))
  }
  render() {
    return <div>
      {this.props.children(this.state)}
    </div>
  }
};

const Func = () => (
  <div>
    <CurrentMousePosition>
      {
        ({ x, y }) => <p>x: {x}, y: {y}</p>
      }
    </CurrentMousePosition>
  </div>
);

export default Func;


