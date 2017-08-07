import React from 'react';

const BaseComponent = ({ title }) =>
  <p>HOC Stateless {title}</p>

const withUppercaseTitle = (Component) => ({ title }) => {
  return <Component title={title.toUpperCase()} />
}

const Main = withUppercaseTitle(BaseComponent)

const Final = () => <Main title='With New Props' />

export default Final