import React, { Component } from 'react';
import List from './containers/list';


class App extends Component {

  state = {
    theme:{ backgroundColor: 'white', color: 'black'}
  }
   
  render() {
    return (
     <List theme={this.state.theme}/>

    );
  }
}

export default App;
