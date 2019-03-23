import React, { Component } from 'react';
import List from './containers/list';


class App extends Component {

  state = {
    theme:{ backgroundColor: 'white', color: 'black'}
  }
  handleThemeChange = (e) => {
    const {value} = e.target;
    console.log(value);
  }
   
  render() {
    return ( 
      <>
      <button>Light Theme</button> <button>Dark Theme</button> 
     <List theme={this.state.theme}/>
      </>
    );
  }
}

export default App;
