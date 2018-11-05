import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../../context/app';
import './styles/styles.scss';

class ColorSelector extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    if (this.props.type === 'select') {
      this.context.colorSet(key)
    } else if ( this.props.type === 'filter') {
      this.props.filter(key);
    }
  }

  render() {
    return (
      <div className="color-selector">
        {this.props.type === 'select' &&
        <span>Pick a color to apply on selection:</span>}
        {this.props.type === 'filter' &&
        <span>Choose colors to show it's contents:</span>}
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

                  if (this.props.type === 'select') {
                    if (key === currentColor) {
                      classArray.push('current');
                    }
                  } else if ( this.props.type === 'filter') {
                    if (
                      this.props.visible &&
                      this.props.visible.includes(key)
                    ) {
                      classArray.push('current');
                    }
                  }


                  return classArray.join(' ');
                };

                return (
                  <button
                    key={`col-${key}`}
                    className={buildClass()}
                    style={{background: col}}
                    onClick={() => {
                      this.handleClick(key)
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

ColorSelector.propTypes = {
  type: PropTypes.oneOf([
    'filter',
    'select',
  ]).isRequired,
  filter: PropTypes.func,
  visible: PropTypes.arrayOf(PropTypes.number),
};

ColorSelector.defaultProps = {
  filter: undefined,
  visible: undefined,
};

ColorSelector.contextType = AppContext;

export default ColorSelector;
