import React from 'react';
import {connect} from 'react-redux';
import {ModalState} from '../../actions'; // functions called actions
import {bindActionCreators} from 'redux';

class Modal extends React.Component {

  render () {
    if (!this.props.item) {
      return <div />;
    }
    return (
      <div className={this.props.modal ? 'display-modal modal' : 'modal'}>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' onClick={() => { this.props.ModalState(false); }}><span>&times;</span></button>
              <h4 className='modal-title'>Tu selección es:</h4>
            </div>
            <div className='modal-body'>
              <p>{this.props.item.name}</p>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-default'
                onClick={() => { this.props.ModalState(false); }}
                >Close</button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => { this.props.ModalState(false); }}
                >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    item: state.activeSelection,
    modal: state.modal
  };
}
function mapDispatchToProps (dispatch) {
  // Whenever selectMenuItem is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ModalState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
