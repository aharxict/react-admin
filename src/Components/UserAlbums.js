import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardColumns, Card, Button } from 'react-bootstrap';
import { loadUserAlbums } from '../Redux/Actions/userAlbums';
import { loadUserGallery } from '../Redux/Actions/userGallery';
import UserGallery from './UserGallery';

class UserAlbums extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedUserId !== nextProps.selectedUserId) {
      this.props.loadUserAlbums(nextProps.selectedUserId);
    }
  }

  loadGallery = (albumId) => {
    this.props.loadUserGallery(albumId);
  };

  renderCard = (album) => {
    return (
      <Card key={album.id}>
        <Card.Header>Album - {album.id}</Card.Header>
        <Card.Body className="text-center">
          <Card.Title>{album.title}</Card.Title>
          <Button variant="primary" onClick={() => this.loadGallery(album.id)}>
            Open gallery
          </Button>
        </Card.Body>
      </Card>
    );
  };

  render () {

    if (!this.props.selectedUserId || this.props.isLoading) {
      return null;
    }

    return (
      <React.Fragment>
        <CardColumns>
          {this.props.data.map(item => {
            return this.renderCard(item);
          })}
        </CardColumns>
        <UserGallery />
      </React.Fragment>
    );
  }
}

UserAlbums.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadUserAlbums: PropTypes.func.isRequired,
  loadUserGallery: PropTypes.func.isRequired,
  data: PropTypes.array,
  selectedUserId: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    isLoading: state.userAlbums.isLoading,
    data: state.userAlbums.data,
    selectedUserId: state.dashboard.selectedUserId,
  }
}

export default connect(
  mapStateToProps,
  {
    loadUserAlbums,
    loadUserGallery,
  }
)(UserAlbums);