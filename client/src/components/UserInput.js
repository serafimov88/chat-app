import React, { useState } from "react";

const UserInput = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <input
        className="input"
        value={message}
        placeholder="type ..."
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={event => sendMessage(event)}>
        Send
      </button>
    </form>
  );
};

export default UserInput;
