import React from 'react';

class RenderProps extends React.Component {
  state = {
    x: '',
    y: '',
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    this.setState(() => ({ x, y }))
  }

  render() {
    return this.props.render(this.state);
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <RenderProps render={({ x, y }) => (
          <div>
              <p>x: { x }, y: { y }</p>
          </div>
        )} />
      </div>
    )
  }
}
