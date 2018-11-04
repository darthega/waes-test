import React, { Component } from 'react';

import { AppContext } from './context/app';

import TextSelector from './components/TextSelector/TextSelector';

import logo from './assets/logo.jpg';
import { createColors, invertColor } from './utils/color';

import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.setColor = this.setColor.bind(this);
    this.setSelection = this.setSelection.bind(this);

    this.defaultColorCount = 3;

    this.state = {
      colorCount: this.defaultColorCount,
      colors: createColors(this.defaultColorCount),
      currentColor: 0,
      selections: {},
      colorSet: this.setColor,
      setSelection: this.setSelection,
    }
  }

  setColor(index) {
    this.setState({
      currentColor: index,
    }, () => {
      window.getSelection().removeAllRanges();
    })
  }

  setSelection(sel) {
    const refSels = this.state.selections;

    refSels[this.state.currentColor] = sel;

    this.setState({
      selections: refSels,
    }, () => {
      const withContents = Object.keys(this.state.selections);

      console.log(withContents);

      for (let i = 0; i < withContents.length; i += 1) {
        const thisSels = this.state.selections[i];

        for (let j = 0; j < thisSels.length; j += 1) {
          const elem = document.createElement('span');

          elem.style.background = this.state.colors[i];
          elem.style.color = invertColor(this.state.colors[i]);

          thisSels[j].surroundContents(elem);
        }
      }
    });
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
            <TextSelector />
            <section>
            </section>
          </main>

        </div>
      </AppContext.Provider>
    );
  }
}

App.contextType = AppContext;

export default App;
