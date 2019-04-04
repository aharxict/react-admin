import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { loadUserGallery } from "../Redux/Actions/userGallery";
import { openModalBox, closeModalBox } from "../Redux/Actions/modalBox";
import PropTypes from "prop-types";
import ModalBox from './ModalBox';
import ImageGallery from 'react-image-gallery';

class UserGallery extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedAlbumId !== nextProps.selectedAlbumId) {
        // this.props.openModalBox();
        this.props.loadUserGallery(nextProps.selectedAlbumId);
    }
  }

  render() {

    if (this.props.isLoading) {
      return null;
    }

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];

    return (
      <ModalBox>
        <ImageGallery items={images} />
      </ModalBox>
    );
  }
}

UserGallery.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadUserGallery: PropTypes.func.isRequired,
  openModalBox: PropTypes.func.isRequired,
  closeModalBox: PropTypes.func.isRequired,
  data: PropTypes.array,
  selectedAlbumId: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    isLoading: state.userGallery.isLoading,
    data: state.userGallery.data,
    selectedAlbumId: state.userAlbums.selectedAlbumId,
  }
}

export default connect(
  mapStateToProps,
  {
    loadUserGallery,
    openModalBox,
    closeModalBox,
  }
)(UserGallery);