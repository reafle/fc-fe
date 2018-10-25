import React from 'react';
import { stringToColour } from '../../services/stringFormatter.js';

const ChatMessage = ({ id, user, time, message }) => {
    return (
      <div key={id} className="message" style={style.message}>
        {time && <span className="time" style={style.time}>{time}</span>}
        {user && <span className="user" style={{ ...style.user, color: stringToColour(user) }}>{user}</span>}
        <span className="message" style={style.message}>{message}</span>
      </div>
    );
}

export default ChatMessage;

const style = {
  message: {
    textAlign: "left",
    padding: "4px",
  },
  user: {
    fontWeight: "bold",
  },
  time: {
    position: "relative",
    display: "inline-block",
    color: "gray",
    padding: "0 2px 0 0",
  }
};
