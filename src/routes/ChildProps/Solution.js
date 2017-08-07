import React from 'react';

const data = ['amanda', 'nicole', 'john', 'amy', 'jani', 'ken'];

const API = {
  getData: () => new Promise(resolve => {
    return setTimeout(() => resolve(data), 2000)
  })
}

class GetData extends React.Component {
  state = {
    data: [],
    isFetching: true,
  }
  componentDidMount() {
    API
      .getData()
      .then(d => {
        console.log('d:', d)
        this.setState(() => ({ data: d, isFetching: false }))
      })
  }
  render() {
    return this.props.children(this.state)
  }
}

export default () => (
  <div>
    <GetData>
      {
        ({ data, isFetching }) => (
          isFetching ? <p>Loading...</p> : <div>
            {
              data.map((d, i) => (
                <p key={i}>{d}</p>
              ))
            }
          </div>
        )
      }
    </GetData>
  </div>
)
