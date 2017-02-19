import React from 'react';
import {connect} from 'react-redux';

class Modal extends React.Component {
  constructor (props) {
    super();
    this.state = {modal: true};
    this.onClickClose = this.onClickClose.bind(this);
  }
  onClickClose (e) {
    this.setState({ modal: false });
  }
  render () {
    if (!this.props.item) {
      return <div />;
    }
    return (
      <div className={this.state.modal ? 'display-modal modal' : '' + 'modal'}>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
              <h4 className='modal-title'>Modal title</h4>
            </div>
            <div className='modal-body'>
              <p>{this.props.item.name}</p>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-default'
                onClick={this.onClickClose}
                >Close</button>
              <button type='button' className='btn btn-primary'>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    item: state.activeSelection
  };
}

export default connect(mapStateToProps)(Modal);
