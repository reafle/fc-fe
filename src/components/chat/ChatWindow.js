import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

import { chat } from '../../actions';

class ChatWindow extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.connectToChat();
  }

  render() {
    const { loading } = this.state;

    return (
      <div style={style.window}>
        <div style={style.close}><button onClick={this.props.onClose}>x</button></div>
        <div style={style.header}>Fake Chat</div>
        {loading && <div>Please wait, loading ....</div>}
        {!loading && <Fragment>
          <ChatMessages />
          <ChatInput />
        </Fragment>}
      </div>
    );
  }
}

export default connect(null, {
  connectToChat: chat.connect,
})(ChatWindow);

const style = {
  window: {
    position: "fixed",
    height: "300px",
    width: "50%",
    background: "white",
    border: "1px solid black",
    bottom: 0,
    right: 0,
  },
  header: {
    fontSize: "18px",
    padding: "4px"
  },
};
