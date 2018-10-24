import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/build/styles.css';
import GooglemapContainer from './Home/containers/GooglemapContainer';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">React app - GoogleMap & JCDecaux</h1>
            </header>
            <GooglemapContainer />
        </div>
    );
  }
}

export default App;
