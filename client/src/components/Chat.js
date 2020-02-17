import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import MessagesContainer from "./MessagesContainer";

var socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);

  const END_POINT = "localhost:3000";

  // effect for user joinig the room and user leave it
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(END_POINT);

    // first parametar is emit event name as string & other is parametar/s passing to server!
    // if pass 3rd parametar it response for callback() / take care about errors for example!
    //      count of parametar (1,2 or 3) must be same both sides, client and server
    socket.emit("join-chatroom", { name, room }, error => {
      console.log(error);
      if (error) {
        alert(error);
        window.location.href = "/";
      }
    });
    // Error is passing from /serve/index.js
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [END_POINT, location.search]);
  //////////////////////////////////////////////////////////////////
  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  //////////////////////////////////////////////////////////////////
  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit("userMessage", message, () => {
        console.log(message);
        setMessage("");
        console.log(message);
      });
      setMessage("");
    }
  };

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <InfoBar roomName={room} />
        <MessagesContainer
          message={message}
          messages={messages}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
