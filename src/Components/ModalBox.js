import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeModalBox } from "../Redux/Actions/modalBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModalBox extends PureComponent {

  render () {

    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div className='modal-box'>
        <div className='modal-container'>
          <FontAwesomeIcon
            icon="times"
            size="2x"
            className="modal-box_close"
            onClick={() => this.props.closeModalBox()}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}

ModalBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isOpen: state.modalBox.isOpen,
  }
}

export default connect(
  mapStateToProps,
  {
    closeModalBox,
  }
)(ModalBox);