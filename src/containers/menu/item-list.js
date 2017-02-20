import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectMenuItem, ModalState} from '../../actions'; // functions called actions
import {bindActionCreators} from 'redux';

class ItemList extends Component {
  renderList () {
    let colSize = 'col-md-12';
    if (this.props.selections.length > 1) {
      colSize = 'col-md-6';
    }
    return this.props.selections.map((item, i) => {
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
  console.log(state);
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
