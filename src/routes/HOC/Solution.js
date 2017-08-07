import React from 'react';

const data = [
  {
    name: 'Jani Eväkallio',
    location: 'London'
  },
  {
    name: 'Ken Wheeler',
    location: 'Jersey',
  },
  {
    name: 'Nader Dabit',
    location: 'Mississippi'
  }
]

const API = {
  getData: () => new Promise(resolve => {
    return setTimeout(() => resolve(data), 2000)
  }),
}

const withPeople = (Component) => {
  return class extends React.Component {
    state = {
      data: [],
      isLoading: true,
    }
    componentDidMount() {
      API
        .getData()
        .then(d => this.setState(() => ({ data: d, isLoading: false, })))
    }
    render() {
      return (
        <Component {...this.props} {...this.state} />
      )
    }
  }
}

const App = ({ isLoading, data }) => (
  <div>
    {
      isLoading ? <p>Loading...</p> : (
        data.map((person, index) => {
          return <div key={index}>
            <h2>{person.name}</h2>
            <p>{person.location}</p>
          </div>
        })
      )
    }
  </div>
);

export default withPeople(App);
