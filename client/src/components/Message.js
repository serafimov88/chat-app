import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Message = ({ message, messages }) => {
//   console.log(message);
//   console.log(messages);

  return (
    <ScrollToBottom>
      <div className="messagesContainer">
        {messages.map((msg, i) => (
          // console.log(msg.text);
          <div key={i} className="singleMessage">
            {msg.user} : {msg.text}
          </div>
        ))}
      </div>
    </ScrollToBottom>
  );
};

export default Message;
