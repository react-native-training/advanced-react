import React from 'react'

const Greeting = () =>
  <p>Hello World!</p>

const greetingWithFunc = (func) => (Component) => (props) => {
  func();
  return <Component {...props} />;
}

const log = () => console.log('hello from higher order component');

const BasicHOC = greetingWithFunc(log)(Greeting)

export default BasicHOC;
