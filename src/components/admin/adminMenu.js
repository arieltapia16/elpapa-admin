import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../header/header';
import * as firebase from 'firebase';

export default class Menu extends Component {
  constructor (props) {
    super();
    this.menuForm = this.menuForm.bind(this);
    this.changeRegularMenu = this.changeRegularMenu.bind(this);
    this.changeLightMenu = this.changeLightMenu.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.state = {
      days: [],
      regular: '',
      light: '',
      select: ''
    };
  }
  changeRegularMenu (event) {
    this.setState({
      regular: event.target.value
    });
  }
  changeLightMenu (event) {
    this.setState({
      light: event.target.value
    });
  }
  selectChange (event) {
    this.setState({
      select: event.target.value,
      regular: this.state.days[event.target.value] ? this.state.days[event.target.value].items[0].name : 'no',
      light: this.state.days[event.target.value] ? this.state.days[event.target.value].items[1].name : 'no'
    });

    // this.state.days[this.state.select] ? this.state.days[this.state.select].items[0].name : 'no',
    // this.state.days[this.state.select] ? this.state.days[this.state.select].items[1].name : 'no',
  }
  componentWillMount () {
    const rootRef = firebase.database().ref().child('dias');
    rootRef.on('value', (snapshot) => {
      this.setState({
        days: snapshot.val()
      });
    });
  }

  menuForm () {
    const obj = firebase.database().ref().child('dias');
    if (this.state.select) {
      obj.child(this.state.select).child('items')
      .update({
        0: {
          img: '',
          menu: '1',
          name: this.state.regular
        },
        1: {
          img: '',
          menu: '2',
          name: this.state.light
        }
      });
    }
    
  }

  render () {
    let daysArray = [];
    let DayNumber = 0;

    var obj = this.state.days;
    for (var e in obj) {
      daysArray.push(obj[e]);
    }
    const menues = daysArray.map((e, i) => {
      DayNumber++;
      if (e.items.length === 1) {
        e.items.push({
          name: ''
        });
      }
      const functionDay = e.items.map((e, i) =>
        <td key={i} >{e.name}</td>
        );

      return <tr key={i}><td>{DayNumber}</td>{functionDay}</tr>;
    }
    );
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const repeatDays = numbers.map((number, i) =>
      <option key={i}>{number}</option>
    );
    return (
      <div className='container-fluid'>
        <Header />
        <div className='col-md-12'>
          <div className='col-md-6'>
            <h3>Menues</h3>
            <table className='table table-striped'>
              <thead>
                <tr><th>Dia</th><th>Menu comun</th><th /></tr>
              </thead>
              <tbody>
                {menues}
              </tbody>
            </table>
          </div>
          <div className='col-md-4'>
            <h3>Modificar Menu</h3><br />
            <div className='form-group menu-edit'>
              <select value={this.state.value} onChange={this.selectChange} className='form-control'>
                <option value=''>Seleccione día</option>
                {repeatDays}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='regular'>Menu Común</label>
              <input type='text' className='form-control' value={this.state.regular} onChange={this.changeRegularMenu} id='regular' placeholder='Comun' />
            </div>
            <div className='form-group'>
              <label htmlFor='light'>Menu Light</label>
              <input type='text' className='form-control' value={this.state.light} onChange={this.changeLightMenu} id='light' placeholder='Light' />
            </div>
            <button type='button' className='btn btn-warning pull-right' onClick={this.menuForm}>Ingresar</button>
          </div>
        </div>
      </div>
    );
  }
}
