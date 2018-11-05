import React from 'react';

import ColorSelector from '../ColorSelector/ColorSelector';
import TextInteraction from '../TextInteraction/TextInteraction';

import './styles/styles.scss';

const TextSelector = function TextSelector(props) {
  return (
    <section className="text-selector">
      <ColorSelector type='select' />
      <TextInteraction />
    </section>
  )
}

export default TextSelector;
