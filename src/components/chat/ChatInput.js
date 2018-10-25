import React, { Component } from 'react';

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


export default ChatInput;

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
