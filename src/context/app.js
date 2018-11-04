import React from 'react';

export const AppContext = React.createContext({
  colorCount: 0,
  colors: [],
  currentColor: undefined,
  colorSet: () => {},
});
