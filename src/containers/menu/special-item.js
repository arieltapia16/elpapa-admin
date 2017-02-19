import React from 'react';

export default class SpecialItem extends React.Component {
  render () {
    return (
      <form className='form-inline specialForm'>
        <div className='form-group'>
          <label htmlFor='specialItem'>Menu especial </label>
          <input type='text' className='form-control' id='specialItem' placeholder='Ingresá tu menu especial' />
        </div>
      </form>
    );
  }
}
