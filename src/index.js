import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import UAParser from 'ua-parser-js';
import Theme from './components/Theme';

import App from './Root';
import * as serviceWorker from './serviceWorker';
import store from './store';

const ua = new UAParser().getResult();

const ROOT_DOM = document.getElementById('root');

window.IS_DESKTOP = ua.device.type !== 'mobile';

ReactDOM.render(
  <>
    <CssBaseline />
    <StoreProvider store={store}>
      <Theme>
        <App />
      </Theme>
    </StoreProvider>
  </>,
  ROOT_DOM
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
