import React, { useState } from "react";
import { Link } from "react-router-dom";



const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");


  return (
    <div className="joinOutrContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Room</h1>
        <div className="">
          <input
            placeholder="nickname..."
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className="">
          <input
            placeholder="room ..."
            className="joinInput mt-20"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          to={`/chatroom?name=${name}&room=${room}`}
          onClick={event => (!name || !room) && event.preventDefault()}
        >
          <button className="button" type="submit">enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
