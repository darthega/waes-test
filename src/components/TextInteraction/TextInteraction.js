import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { invertColor } from '../../utils/color';
import './styles/styles.scss';

class TextInteraction extends Component {
  constructor(props) {
    super(props);

    this.firstClean = this.firstClean.bind(this);

    this.touched = false;
  }

  componentDidMount() {
    this.container.innerHTML = 'Please type or paste your text here...';
    document.onselectionchange = () => {
      this.selection = document.getSelection();
    };
  }

  firstClean(e) {
    if (!this.touched) {
      this.container.innerHTML = '';
      this.touched = true;
    }
  }

  render() {
    return (
      <div
        style={{
          '--select-background': this.props.color,
          '--select-color': invertColor(this.props.color),
        }}
        className={`text-container${(!this.touched) ? ' dimmed' : ''}`}
        contentEditable
        ref={(el) => {this.container = el;}}
        onFocus={this.firstClean}
      />
    )
  }
}

TextInteraction.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TextInteraction;
