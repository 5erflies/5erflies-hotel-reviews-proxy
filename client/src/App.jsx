// import react, axios styled components
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const query = window.location.search;
const ENDPOINT = `${query}`;
// style each component
// create an app component which uses all services (teammates components)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
  }

  getData(callback) {
    console.log('getData working!');
    axios.get(ENDPOINT)
      .then(callback)
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    console.log('Component Mounting!');
    this.getData(this.setData);
  }

  setData(data) {
    console.log('Setting should work!');
    this.setState({data: data});
  }

  render() {
    return (
      <div >{this.state.data.data}</div>
    );
  }
}

// send a get request using axios to the proxy server and recieves data or err
// export App

export default App;