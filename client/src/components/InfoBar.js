import React from "react";

const InfoBar = ({roomName}) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img
          className="onlineIcon"
          src="http://icon-library.com/images/online-icon-png/online-icon-png-11.jpg"
        />
        <h3>{roomName}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img
            className="onlineIcon"
            src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-59-512.png"
          />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
