import React from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

export default class MenuItem extends React.Component {
  render () {
    return (
      <div className={this.props.col + ' img-container'} >
        <img className='imgMenu' src={this.props.source} width='100%' />
      </div>
    );
  }
}
