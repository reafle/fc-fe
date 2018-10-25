import React, { Component } from 'react';
import ChatWindow from './ChatWindow';

class ChatControl extends Component {
  state = {
    chatVisible: false,
  }

  handleClose = () => {
    this.setState({ chatVisible: false });
  }

  render() {
    const { chatVisible } = this.state;

    return (
      <div style={style}>
        <button onClick={() => this.setState({ chatVisible: true })}>Conservative Chat</button>
        {chatVisible &&
          <ChatWindow onClose={this.handleClose} />
        }
      </div>
    );
  }
}

export default ChatControl;

const style = {
   padding: "20px 0",
};
