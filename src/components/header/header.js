
import React from 'react';
import { Navbar } from 'react-bootstrap';

import LogoImg from './img/elpapa.png';

export default class Header extends React.Component {
  render () {
    return (
      <Navbar >
        <div className='Logo'><img src={LogoImg} alt='' width='100px' /> <div className='title'>EL PAPA FOREVER</div></div>
      </Navbar>
    );
  }
}
