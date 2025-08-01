import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { Provider } from 'react-redux';

import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
