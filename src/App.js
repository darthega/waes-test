import React, { Component } from 'react';

import { AppContext } from './context/app';

import TextSelector from './components/TextSelector/TextSelector';

import logo from './assets/logo.jpg';
import { createColors } from './utils/color';

import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.setColor = this.setColor.bind(this);

    this.defaultColorCount = 3;

    this.state = {
      colorCount: this.defaultColorCount,
      colors: createColors(this.defaultColorCount),
      currentColor: 0,
      colorSet: this.setColor,
    }
  }

  setColor(index) {
    this.setState({
      currentColor: index,
    })
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Semaphore highlighter</h1>
          </header>
          <main>
              <TextSelector>
              Some test text
              </TextSelector>
            <section>
              <button style={{background: this.state.colors[this.state.currentColor]}}>Just for testing purposes</button>
            </section>
          </main>

        </div>
      </AppContext.Provider>
    );
  }
}

App.contextType = AppContext;

export default App;
