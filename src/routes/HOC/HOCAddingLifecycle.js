import React from 'react';

const MainComponent = () =>
  <p>HOC Adding Lifecycle</p>

const AddingLifecycle = (Component, node, type, func) => {
  return class extends React.Component {
    componentDidMount() {
      node.addEventListener(type, func);
    }
    render() {
      return (
        <MainComponent {...this.state} />
      )
    }
  }
}

export default AddingLifecycle(MainComponent, window, 'resize', () => console.log('resized...'));
