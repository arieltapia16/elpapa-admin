import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import {browserHistory} from 'react-router';
import Header from '../header/header';
import * as firebase from 'firebase';
import menuOrder from './menu-order';

export default class AdminDashboard extends Component {
  constructor (props) {
    super();
    this.state = {
      dinners: []
    };
  }
  componentWillMount () {
    menuOrder();
    const rootRef = firebase.database().ref().child('daySelection').child('dinners');
    rootRef.on('value', (snapshot) => {
      this.setState({
        dinners: snapshot.val()
      });
    });
  }

  render () {
    let dinnersArray = [];
    var obj = this.state.dinners;
    for (var e in obj) {
      dinnersArray.push(obj[e]);
    }
    let menu = 0;
    let delivery = 0;
    const dinners = dinnersArray.map((e, i) => {
      if (e.menu === '1') {
        menu++;
      }
      if (e.delivery) {
        delivery++;
      }
      return <tr key={i}><td>{e.showName}</td><td>{e.selection}</td><td>{e.delivery ? 'SI' : 'NO'}</td></tr>;
    }
    );
    return (
      <div className='container-fluid'>
        <Header />
        <div className='col-md-12'>
          <div className='col-md-6'>
            <table className='table table-striped'>
              <thead>
                <tr><th>Comensal</th><th>Elección</th><th>Para llevar</th></tr>
              </thead>
              <tbody>
                {dinners}
              </tbody>
            </table>
          </div>
          <div className='col-md-6'>
            <table className='table table-striped'>
              <thead>
                <tr><th>Total de menues</th><th>Comunes</th><th>Lights</th><th>Para llevar</th></tr>
              </thead>
              <tbody>
                <tr><td>{dinnersArray.length}</td><td>{menu}</td><td>{dinnersArray.length - menu}</td><td>{delivery}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
