import React from 'react';

// const Container = ({ children }) => (
//   <div>
//     { children }
//   </div>
// );

class Container extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        { this.props.children }
      </div>
    )
  }
}

export default class RenderProps extends React.Component {
  render() {
    return (
      <Container>
        <p>Hello from Container</p>
      </Container>
    )
  }
}

const styles = {
  container: {
    backgroundColor: 'red',
    padding: 25,
  }
};
