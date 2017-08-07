import React from 'react'

const override = (overrideProps) => (Component) => (props) =>
  <Component {...props} {...overrideProps} />

const User = ({ name, city }) => <p>{name} {city}</p>

const AlwaysKen = override({ name: 'Ken' })(User)

export default () => (
  <div>
    <User name='Nader' city='Seattle' />
    <AlwaysKen name='Nader' city='Seattle' />
  </div>
)
