import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Login from './components/login/Login';
import Admin from './components/admin/admin';
import Users from './components/admin/users';
import AdminDashboard from './components/admin/adminDashboard';
import './index.css';
import {Provider} from 'react-redux';// very important to connect all the aplication
import {createStore} from 'redux'; // create a store to store the reducers (REDUX)
import rootReducer from './reducers'; // The reducer root
import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDmhyj7ZqeCxnFbr974CSvkiheTSfzfZmc',
  authDomain: 'el-papa-forever.firebaseapp.com',
  databaseURL: 'https://el-papa-forever.firebaseio.com',
  storageBucket: 'el-papa-forever.appspot.com',
  messagingSenderId: '5314079546'
};

firebase.initializeApp(config);
const store = createStore(rootReducer);

let userData = {logged: false};
let adminData = {logged: false};
// console.log(userData);

if (localStorage.user) {
  userData = JSON.parse(localStorage.user); // eslint-disable-line
}
if (localStorage.admin) {
  adminData = JSON.parse(localStorage.admin); // eslint-disable-line
}

// <Provider> is use to wrap all the components and connect
ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path='/' component={Login} />
      <Route path='/admin' component={Admin} />
      <Route path='/admin-dashboard' component={AdminDashboard} />
      <Route path='/admin-users' component={Users} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
