import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  
   maxCharacters = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked,
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
