import React, { Component } from 'react';
import List from './containers/list';
import ThemeContext from './contexts/theme';


class App extends Component {

  state = {
    theme:{ backgroundColor: 'white', color: 'black'}
  }

  handleThemeChange = (e) => {
    const {innerText} = e.target;

    if(innerText === 'Dark Theme') {
      this.setState({ theme: { backgroundColor: 'black', color: 'white'} })
    }
    else if (innerText === 'Light Theme') {
      this.setState({ theme: { backgroundColor: 'white', color: 'black'} })
    }
  }
   
  render() {
    return ( 
      <LanguageContext.Provider value={}>
      <ThemeContext.Provider>
      <button onClick={this.handleThemeChange}>Light Theme</button> <button onClick={this.handleThemeChange}>Dark Theme</button> 
     <List theme={this.state.theme}/>
     </ThemeContext.Provider>
     </LanguageContext.Provider>
    );
  }
}

export default App;
