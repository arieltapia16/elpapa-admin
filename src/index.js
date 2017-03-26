import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/login/Login';
import Users from './components/admin/users';
import Menu from './components/admin/adminMenu';
import AdminDashboard from './components/admin/adminDashboard';
import './App.css';
import {Provider} from 'react-redux';// very important to connect all the aplication
import {createStore} from 'redux'; // create a store to store the reducers (REDUX)
import rootReducer from './reducers'; // The reducer root
import * as firebase from 'firebase';

console.log(Menu);
var config = {
  apiKey: 'AIzaSyDmhyj7ZqeCxnFbr974CSvkiheTSfzfZmc',
  authDomain: 'el-papa-forever.firebaseapp.com',
  databaseURL: 'https://el-papa-forever.firebaseio.com',
  storageBucket: 'el-papa-forever.appspot.com',
  messagingSenderId: '5314079546'
};

firebase.initializeApp(config);
const store = createStore(rootReducer);

let adminData = {logged: false};
// console.log(userData);

if (localStorage.admin) {
  adminData = JSON.parse(localStorage.admin); // eslint-disable-line
}

// <Provider> is use to wrap all the components and connect
ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path='/' component={Login} />
      { adminData.logged ? <Route path='/admin-dashboard' component={AdminDashboard} /> : browserHistory.push('/')}
      { adminData.logged ? <Route path='/admin-menu' component={Menu} /> : browserHistory.push('/')}
      { adminData.logged ? <Route path='/admin-users' component={Users} /> : browserHistory.push('/')}

    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
