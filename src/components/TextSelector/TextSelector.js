import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../../context/app';

import ColorSelector from '../ColorSelector/ColorSelector';

class TextSelector extends Component {
  constructor(props) {
    super(props);
  }

  setup() {

  }

  render() {
    return (
      <section>
        <ColorSelector />
        <AppContext.Consumer>
          {({ colors, currentColor }) => (
            <div>Current: {colors[currentColor]}</div>
          )}
        </AppContext.Consumer>
      </section>
    )
  }
}

TextSelector.propTypes = {
  children: PropTypes.node,
};

TextSelector.defaultProps = {
  children: undefined,
}

export default TextSelector;
