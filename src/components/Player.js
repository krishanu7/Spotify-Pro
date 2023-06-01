import React from "react";
import "../styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default Player;
