import React from "react";
import UserInput from "./UserInput";
import Message from "./Message";

const MessagesContainer = ({ message, messages, setMessage, sendMessage }) => {
  return (
    <>
      <Message message={message} messages={messages} />

      <UserInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </>
  );
};

export default MessagesContainer;
