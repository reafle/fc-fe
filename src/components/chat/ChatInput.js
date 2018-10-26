import React, { Component } from 'react';
import { connect } from 'react-redux';

import { chat } from '../../actions';

class ChatInput extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    const { value }  = e.target;
    this.setState({ value });
  }

  handleSubmit = (e) => {
    const { name } = this.props;
    const { value } = this.state;

    if (!name) {
      this.props.joinChannel(value);
    } else {
      this.props.sendMessage(value);
    }

    this.setState({ value: '' });

    e.preventDefault();
  }

  render() {
    const { name } = this.props;
    const { value } = this.state;

    const placeholder = !name ? "Your name" : "Share it...";
    const buttonLabel = !name ? "JOIN" : "Say";

    return <form onSubmit={this.handleSubmit} style={style.form}>
        <input placeholder={placeholder} type="text" style={style.input} value={value} onChange={this.handleChange} />
        <button type="submit">{buttonLabel}</button>
      </form>;
  }
}

const mapStateToProps = (state) => ({
  name: state.chat.user,
})

export default connect(mapStateToProps, {
  joinChannel: chat.joinChannel,
  sendMessage: chat.sendMessage,
})(ChatInput);

const style = {
  form: {
    textAlign: "right",
    height: "30px",
    lineHeight: "30px",
    verticalAlign: "middle",
  },
  input: {
    width: "300px",
  }


};
