import React from 'react';
import ReactDOM from 'react-dom';

import GobalStyles from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import App from './App';
import Theme from './theme/Theme';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
