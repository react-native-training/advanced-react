import React from 'react';

/*
*  In GetData, Use the API.getData() method to simulate an API call.
*  Return the data in the this.props.children() method of the GetData component.
*/

const data = ['amanda', 'nicole', 'john', 'amy', 'jani', 'ken'];

const API = {
  getData: () => new Promise(resolve => {
    return setTimeout(() => resolve(data), 2000)
  })
}

class GetData extends React.Component {
  render() {
    return this.props.children('')
  }
}

export default () => (
  <div>
      {/* Here use <GetData> to map over the data from the API */}
  </div>
)
