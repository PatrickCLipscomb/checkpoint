import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configureStore';
import App from './components/App';
import ItemList from './components/ItemList';

const store = configureStore();

render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
