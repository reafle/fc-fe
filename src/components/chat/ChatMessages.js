import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';

class ChatMessages extends Component {
  state = {
    //    messages: [
    //      { id: "1", user: "FakeUser1", time: "12:01", message: "I think Trump will make america great again" },
    //      { id: "2", user: "Petras", time: "12:02", message: "I think Trump will make america great again" },
    //      { id: "3", user: "Testas", time: "12:03", message: "I think Trump will make america great agaiI think Trump will make america great agaiI think Trump will make america great agaiI think Trump will make america great agaiI think Trump will make america great againnnnnI think Trump will make america great again" },
    //      { id: "4", user: "Zomg", time: "12:04", message: "I think Trump will make america great again" },
    //      { id: "5", user: "FakeUser5", time: "12:05", message: "I think Trump will make america great again" },
    //      { id: "6", user: "American", time: "12:06", message: "I think Trump will make america great again" },
    //      { id: "7", user: "GreatUser", time: "12:07", message: "I think Trump will make america great again" },
    //      { id: "8", user: "TakeUser", time: "12:08", message: "I think Trump will make america great again" },
    //      { id: "9", user: "MakeUser", time: "12:09", message: "I think Trump will make america great again" },
    //    ],
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="messages" style={style.messages}>
        {messages.map(i => <ChatMessage key={i.id} { ...i } />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

export default connect(mapStateToProps)(ChatMessages);

const style = {
  messages: {
    overflow: "auto",
    height: "220px",
  },
}
