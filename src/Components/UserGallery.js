import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModalBox from './ModalBox';
import ImageGallery from 'react-image-gallery';

class UserGallery extends PureComponent {

  render() {

    if (this.props.isLoading) {
      return null;
    }

    const images = this.props.data.map(item => {
      return {
        original: item.url,
        thumbnail: item.thumbnailUrl,
      }
    });

    return (
      <ModalBox>
        <ImageGallery items={images} lazyLoad />
      </ModalBox>
    );
  }
}

UserGallery.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    isLoading: state.userGallery.isLoading,
    data: state.userGallery.data,
  }
}

export default connect(
  mapStateToProps
)(UserGallery);