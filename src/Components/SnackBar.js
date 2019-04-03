import React, { PureComponent } from 'react';

class SnackBar extends PureComponent {

  state = {
    class: "snack-bar ",
  };

  componentDidMount () {
    this.timeoutShow = setTimeout(() => {
      this.setState(
        {class: this.state.class + "show "}
        );
    }, 500);
    this.timeoutHide = setTimeout(() => {
      this.setState(
        {class: this.state.class + "hide "}
      );
    }, 3000);
  }

  componentWillUnmount () {
    if (this.timeoutShow) {
      clearTimeout(this.timeoutShow);
    }
    if (this.timeoutHide) {
      clearTimeout(this.timeoutHide);
    }
  }

  render () {
    return (
      <div className={this.state.class}>
        {this.props.description + this.props.userId}
      </div>
    );
  }
}

export default SnackBar;