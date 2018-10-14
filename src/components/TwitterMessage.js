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
        <input type="text" onChange={this.maxCharacters} value={this.state.characters}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
