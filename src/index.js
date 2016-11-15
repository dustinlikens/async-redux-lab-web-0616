import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);


