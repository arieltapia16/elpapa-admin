import React from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import MenuItem from './menu-item';
// import LogoImg from '../header/img/elpapa.png';


export default class Menu extends React.Component {
  render () {
    const itemsImg = ['./itemPhotos/polloyensalada.jpg', './itemPhotos/polloyensalada.jpg'];
    let colSize = 'col-md-12';
    const itemContainer = itemsImg.map(function (img) {
      if (itemsImg.length > 1) {
        colSize = 'col-md-6';
      }
      return (
        <MenuItem source={require(img)} col={colSize} />
      );
    });
    return (
      <div>
        {itemContainer}
      </div>
    );
  }
}
