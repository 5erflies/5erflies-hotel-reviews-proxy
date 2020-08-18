// import react, axios styled components
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PORT = 3000;
// style each component
// create an app component which uses all services (teammates components)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log('getData/ComponentMount working!');
    // axios.get(PORT)
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>React Rendering</div>
    );
  }
}

// send a get request using axios to the proxy server and recieves data or err
// export App

export default App;