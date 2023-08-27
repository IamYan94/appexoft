import React, { Component } from "react";

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLike}>Like</button>
        <p>Likes: {this.state.likes}</p>
      </div>
    );
  }
}

export default LikeButton;
