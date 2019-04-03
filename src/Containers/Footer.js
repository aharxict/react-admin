import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SnackBar from '../Components/SnackBar';

class Footer extends PureComponent {

  state = {
    selectedUserId: null,
    snackBars: [],
    isShowSnackBar: true
  };

  renderSnackBars = () => {

    if (this.state.isShowSnackBar && this.state.snackBars.length > 3) {
      this.setState({
        snackBars: this.state.snackBars.filter((item,index) => {
          return index !== 0;
        })
      });
    }

    if (this.state.isShowSnackBar && this.state.snackBars.length > 0) {
      return this.state.snackBars.map((item, index) => {

        const description = 'User selected with ID = ' + item;

        return (
          <SnackBar
            key={'' + item}
            description={description}
          />
          );
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedUserId !== nextProps.selectedUserId) {
      this.setState({
        snackBars: [...this.state.snackBars, nextProps.selectedUserId]
      });
    }
    this.timeoutRemoveBar = setTimeout(() => {
      this.setState({
        snackBars: this.state.snackBars.filter((item,index) => {
          return index !== 0;
        })
      });
    }, 4000);
  }

  componentWillUnmount () {
    if (this.timeoutRemoveBar) {
      clearTimeout(this.timeoutRemoveBar);
    }
  }

  render () {
    return (
      <React.Fragment>
        <footer>
        </footer>
        <div className="snack-bar-container">
          {this.renderSnackBars()}
        </div>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  selectedUserId: PropTypes.number,
};

Footer.defaultProps = {
  selectedUserId: null,
};

function mapStateToProps(state) {
  return {
    selectedUserId: state.dashboard.selectedUserId
  };
}

export default connect(
  mapStateToProps
)(Footer);