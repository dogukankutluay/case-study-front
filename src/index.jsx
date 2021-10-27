import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import configureStore from './configureStore';
import './assets/style/variables.module.scss';
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

export const history = createBrowserHistory();

export const store = configureStore();

export const state = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
