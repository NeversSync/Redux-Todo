import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './Todo/reducers';

const store = createStore(reducers,
  {
    todos: [
      { name: 'eat', completed: false },
      { name: 'shit', completed: false },
      { name: 'sleep', completed: false },
      { name: 'die', completed: true }
    ]
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
