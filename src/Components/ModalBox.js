import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openModalBox, closeModalBox } from "../Redux/Actions/modalBox";

class ModalBox extends PureComponent {

  componentWillMount() {
    this.props.openModalBox();

    if (!this.props.isOpen) {
      // this.props.closeModalBox();
      console.log('open', window);
    } else {
      this.props.closeModalBox();
      console.log('close', window);
    }
  }

  render () {

    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div className='modal-box'>
        <div className='modal-container'>
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
    openModalBox,
    closeModalBox,
  }
)(ModalBox);