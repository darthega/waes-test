import React, { Component } from 'react';

import { AppContext } from '../../context/app';

import ColorSelector from '../ColorSelector/ColorSelector';
import FilterWindow from '../FilterWindow/FilterWindow';

class TextFilter extends Component {
  constructor(props) {
    super(props);

    this.filter = this.filter.bind(this);

    this.state = {
      visible: [],
    }
  }

  filter(key) {
    const refVisible = this.state.visible;
    const keyIndex = refVisible.findIndex((el) => el === key);

    if (keyIndex > -1) {
      refVisible.splice(keyIndex, 1)
    } else {
      refVisible.push(key);
    }

    this.setState({
      visible: refVisible,
    });
  }

  render () {
    return (
      <AppContext.Consumer>
        {({ colors, selections }) => {
          return (
            <section className="text-filter">
              <ColorSelector
                type='filter'
                filter={this.filter}
                visible={this.state.visible}
              />
              <FilterWindow
                visible={this.state.visible}
                selections={selections}
                colors={colors}
              />
            </section>
          )
        }}
      </AppContext.Consumer>

    )
  }
}

TextFilter.contextType = AppContext;

export default TextFilter;
