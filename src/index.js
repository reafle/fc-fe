import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import io from 'socket.io-client';
import rootEpic from './epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const socket$ = new BehaviorSubject(null);
const epicMiddleware = createEpicMiddleware({ dependencies: { io, socket$ } });

const initializeStore = () => {

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
} 

ReactDOM.render(
  <Provider store={initializeStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
