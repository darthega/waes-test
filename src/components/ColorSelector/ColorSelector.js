import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../../context/app';
import './styles/styles.scss';

class ColorSelector extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="color-selector">
        Pick a color to apply on selection:
        <AppContext.Consumer>
          {({
            colors,
            currentColor,
            colorSet,
          }) => {
            return (
              colors.map((col, key) => {
                const buildClass = () => {
                  const classArray = ['color-swatch'];

                  if (key === currentColor) {
                    classArray.push('current');
                  }

                  return classArray.join(' ');
                };

                return (
                  <button
                    key={`col-${key}`}
                    className={buildClass()}
                    style={{background: col}}
                    onClick={() => {
                      colorSet(key)
                    }}
                  />
                );
              })
            );
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}


export default ColorSelector;
