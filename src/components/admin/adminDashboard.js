import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {browserHistory} from 'react-router';
import Header from '../header/header';
import * as firebase from 'firebase';


export default class AdminDashboard extends Component {
  constructor (props) {
    super();
    this.state = {
      dinners: []
    };
  }
  componentWillMount () {
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
    const dinners = dinnersArray.map((e, i) =>
      <tr key={i}><td>{e.user}</td><td>{e.selection}</td></tr>
    );
    return (
      <div className='container-fluid'>
        <Header />
        <div className='col-md-12'>
          <div className='col-md-3' />
          <div className='col-md-6'>
            <table className='table table-striped'>
              <thead>
                <tr><th>Comensal</th><th>Elección</th></tr>
              </thead>
              <tbody>
                {dinners}
              </tbody>
            </table>
          </div>
          <div className='col-md-3' />
        </div>
      </div>
    );
  }
}
