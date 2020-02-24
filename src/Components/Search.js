import React, { PureComponent } from 'react';
import { Button } from "react-bootstrap";

class Search extends PureComponent {

  focus = () => {
    this.textInput.focus();
  };

  render() {
    return (
      <div className="text-center">
        <input
          type="text"
          ref={(input) => {
            this.textInput = input;
          }}
          className="mb-3"
        />
        <br/>
        <Button
          onClick={this.focus}
        >
          Search post title
        </Button>
      </div>
    );
  }
}

export default Search;