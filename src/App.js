import React, { Component } from 'react';

import { createColors } from './utils/color';
import logo from './assets/logo.jpg';
import './styles/App.scss';

const appContext = React.createContext({
  colorCount: 0,
  colors: [],
  currentColor: undefined,
});

class App extends Component {
  constructor(props) {
    super(props);

    this.defaultColorCount = 3;

    this.state = {
      colorCount: this.defaultColorCount,
      colors: createColors(this.defaultColorCount),
      currentColor: 0,
    }
  }

  render() {
    return (
      <appContext.Provider value={this.state}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Semaphore highlighter</h1>
          </header>
          <main>
          (section)*2
          </main>
        </div>
      </appContext.Provider>
    );
  }
}

App.contextType = appContext;

export default App;
