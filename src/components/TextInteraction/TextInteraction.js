import React, { Component, Fragment } from 'react';

import { AppContext } from '../../context/app';

import { invertColor } from '../../utils/color';
import './styles/styles.scss';

class TextInteraction extends Component {
  constructor(props) {
    super(props);

    this.firstClean = this.firstClean.bind(this);
    this.storeSelection = this.storeSelection.bind(this);

    this.state = {
      touched: false,
    }
  }

  componentDidMount() {
    this.container.innerHTML = 'Please type or paste your text here, remember that rich text will be pasted as plain text...';

    this.container.addEventListener('paste', (e) => {
      e.preventDefault();

      const text = e.clipboardData.getData("text/plain");
      this.container.innerHTML = text;
    });

    document.onselectionchange = () => {
      this.selection = document.getSelection();
    };
  }

  firstClean(e) {
    if (!this.state.touched) {
      this.container.innerHTML = '';

      this.setState({
        touched: true,
      });
    }
  }

  storeSelection() {
    const selection = window.getSelection();
    const selRange = (selection.rangeCount > 0) ? selection.getRangeAt(0) : false;
    const refSels = this.context.selections[this.context.currentColor] || [];

    if (selRange) {
      refSels.push(selRange);
      this.context.setSelection(refSels);
      selection.removeAllRanges();
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {({
          colors,
          currentColor,
          selections,
          setSelection,
        }) => {
          const currColor = colors[currentColor];
          const currContrast = invertColor(colors[currentColor]);

          return (
            <Fragment>
              <div
                style={{
                  '--select-background': currColor,
                  '--select-color': currContrast,
                }}
                className={`text-container${(!this.state.touched) ? ' dimmed' : ''}`}
                contentEditable
                ref={(el) => {this.container = el;}}
                onFocus={this.firstClean}
              />
              <div className="action">
                <button
                  onClick={this.storeSelection}
                >
                  Store selection under color:
                  <div
                    style={{
                      background: currColor,
                      border: `solid 1px ${currContrast}`,
                    }}
                  />
                </button>
              </div>
            </Fragment>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

TextInteraction.contextType = AppContext;

export default TextInteraction;
