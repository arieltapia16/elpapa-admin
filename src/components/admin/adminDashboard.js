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
     for (const key of Object.keys(obj)) {
      console.log(key, obj[key]);
      dinnersArray.push({name: key, option: obj[key]});
    }
    console.log(dinnersArray);
    const dinners = dinnersArray.map((e, i) =>
      <tr key={i}><td>{e.name}</td><td>{e.option}</td></tr>
    );
    return (
      <div className='container-fluid'>
        <Header />
        <div className='col-md-12'>
          <div className='col-md-3' />
          <div className='col-md-6'>
            <table className='table table-striped'>
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
