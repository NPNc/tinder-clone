import React from "react";
import Chat from "./Chat/Chat";
import "./Chats.css";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="YO whats up ???"
        timestamp="40 seconds ago"
        profilePic="https://thuthuatnhanh.com/wp-content/uploads/2019/10/hinh-anime-boy-726x580.jpg"
      />
    </div>
  );
}

export default Chats;
