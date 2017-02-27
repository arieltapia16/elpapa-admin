import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectMenuItem, ModalState} from '../../actions'; // functions called actions
import {bindActionCreators} from 'redux';
import * as firebase from 'firebase';

class ItemList extends Component {
  constructor () {
    super();
    this.state = {
      dayArray: []
    };
  }
  componentWillMount () {
  // const obj = firebase.database().ref();
  //   obj.update({
  //     'users': {
  //       'arielTapia': {
  //           'pass': '123avapass'
  //         }
  //     }
  //   });

    firebase.database().ref().child('dias').child('1').child('items').on('value', (day) => {
      let array = [];
      day.val().forEach(function (e) {
        array.push(e);
      });
      this.setState({
        dayArray: array
      });
    });
  }
  renderList () {
    let colSize = 'col-md-12';
    if (this.state.dayArray.length > 1) {
      colSize = 'col-md-6';
    }
    return this.state.dayArray.map((item, i) => {
      return (
        <div
          key={i}
          className={colSize + ' img-container'}
          onClick={() => { this.props.selectMenuItem(item); this.props.ModalState(true); }}
          >
          <img className='imgMenu' alt='' src={require(item.img)} width='100%' />
        </div>
      );
    });
  }
  render () {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    selections: state.selections
  };
}
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps (dispatch) {
  // Whenever selectMenuItem is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({selectMenuItem, ModalState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
