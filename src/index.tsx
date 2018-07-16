
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Redux from 'redux';
import * as Logger from 'redux-logger';
import App from './components/app/App';

import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const loggerMiddleware = Logger.createLogger()

const store = Redux.createStore(
  reducer,
  Redux.applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))