import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: ""
    };
  }
  
   maxCharacters = () => {
    this.setState({
      characters: event.target.value,
    });
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.maxCharacters} />
      </div>
    );
  }
}

export default TwitterMessage;
