import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';// very important to connect all the aplication
import {createStore} from 'redux'; // create a store to store the reducers (REDUX)
import rootReducer from './reducers'; // The reducer root

const store = createStore(rootReducer);
// <Provider> is use to wrap all the components and connect
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
