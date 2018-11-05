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
      colors,
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
        const midContent = [];

        if (selKeys[j] === vKey) { 
          for (let k = 0; k < thisSel.length; k += 1) {
            midContent.push(
              <li
                key={`s-${i}-${j}-${k}`}
                style={{'--bullet-color': colors[vKey]}}
              >
                {thisSel[k].toString()}
              </li>
            );
          }

          contents.push(<ul key={`s-${i}-${j}`}>{midContent}</ul>);
        }
      }
    }

    return contents;
  }

  render () {
    return (
      <section className="filter-window">
        <ul>{this.renderSelections()}</ul>
      </section>
    )
  }
}

FilterWindow.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  visible: PropTypes.arrayOf(PropTypes.number).isRequired,
  selections: PropTypes.shape({}).isRequired,
};

export default FilterWindow;
