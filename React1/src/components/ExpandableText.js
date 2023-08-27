import React, { Component } from "react";

class ExpandableText extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
  }

  toggleExpansion = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { text, maxChars } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <p>
          {expanded ? text : text.slice(0, maxChars)}
          {!expanded && text.length > maxChars && (
            <button onClick={this.toggleExpansion}>Розгорнути</button>
          )}
        </p>
      </div>
    );
  }
}

export default ExpandableText;
