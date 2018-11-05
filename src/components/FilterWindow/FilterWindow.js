import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

class FilterWindow extends Component {
  constructor(props) {
    super(props);

    this.renderSelections = this.renderSelections.bind(this);
  }

  renderSelections() {
    const {
      selections,
      visible,
    } = this.props;
    const selKeys = Object.keys(selections).map((item) => parseInt(item, 10));
    const contents = [];

    for (let i = 0; i < visible.length; i += 1) {
      const vKey = visible[i];

      console.log(vKey);

      for (let j = 0; j < selKeys.length; j += 1) {
        const thisSel = selections[selKeys[j]];

        if (selKeys[j] === vKey) { 
          for (let k = 0; k < thisSel.length; k += 1) {
            contents.push(<li key={`s-${i}-${j}-${k}`}>{thisSel[k].toString()}</li>);
          }
        }
      }
    }

    return contents;
  }

  render () {
    console.log(this.props);
    return (
      <section className="text-selector">
        <ul>{this.renderSelections()}</ul>
      </section>
    )
  }
}

FilterWindow.propTypes = {
  visible: PropTypes.arrayOf(PropTypes.number).isRequired,
  selections: PropTypes.shape({}).isRequired,
};

export default FilterWindow;
