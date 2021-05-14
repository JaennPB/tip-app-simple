import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import App from './App';
import GobalStyles from './theme/GlobalStyles';
import Theme from './theme/Theme';
import store from './store/index';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <GobalStyles />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
