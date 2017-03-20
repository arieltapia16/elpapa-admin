import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../header/header';
import * as firebase from 'firebase';

export default class AdminDashboard extends Component {
  constructor (props) {
    super();
    this.dinnerForm = this.dinnerForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changeName = this.changeName.bind(this);
    this.state = {
      users: [],
      user: '',
      name: ''
    };
  }
  changeUser (event) {
    this.setState({
      user: event.target.value
    });
  }
  changeName (event) {
    this.setState({
      name: event.target.value
    });
  }
  componentWillMount () {
    const rootRef = firebase.database().ref().child('users');
    rootRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({
        users: snapshot.val()
      });
    });
  }

  dinnerForm () {
    console.log('push');
    const obj = firebase.database().ref().child('users');
    obj.push({
      'user': this.state.user,
      'name': this.state.name,
      'pass': '123avapass'
    });
    this.setState({
      user: '',
      name: ''
    });
  }

  render () {
    let usersArray = [];
    var obj = this.state.users;
    for (var e in obj) {
      usersArray.push(obj[e]);
    }
    const users = usersArray.map((e, i) =>
      <tr key={i}><td>{e.name}</td><td>{e.user}</td><td><a href='#'>Refrescar Password</a></td><td className='delete'><a href='#'>X</a></td></tr>
    );
    return (
      <div className='container-fluid'>
        <Header />
        <div className='col-md-12'>
          <div className='col-md-6'>
            <h3>Comensales</h3>
            <table className='table table-striped'>
              <thead>
                <tr><th>Comensal</th><th>Nombre de Usuario</th><th /></tr>
              </thead>
              <tbody>
                {users}
              </tbody>
            </table>
          </div>
          <div className='col-md-4 new-dinner'>
            <h3>Agregar Comensal</h3><br />
            <div className='form-group'>
              <label htmlFor='user'>Usuario</label>
              <input type='text' className='form-control' value={this.state.user} onChange={this.changeUser} id='user' placeholder='Nombre de Usuario' />
            </div>
            <div className='form-group'>
              <label htmlFor='name'>Comensal</label>
              <input type='text' className='form-control' value={this.state.name} onChange={this.changeName} id='name' placeholder='Nombre de Comensal' />
            </div>
            <button type='button' className='btn btn-warning pull-right' onClick={this.dinnerForm}>Ingresar</button>
          </div>
        </div>
      </div>
    );
  }
}
