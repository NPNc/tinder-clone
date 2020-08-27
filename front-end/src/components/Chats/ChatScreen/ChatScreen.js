import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Elien",
      image:
        "https://thuthuatnhanh.com/wp-content/uploads/2019/10/hinh-anime-boy-726x580.jpg",
      message: "Whats up ?",
    },
    {
      name: "Elien",
      image:
        "https://thuthuatnhanh.com/wp-content/uploads/2019/10/hinh-anime-boy-726x580.jpg",
      message: "Hows it going",
    },
    {
      message: "Hows it going!",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    if (input !== "") {
      setMessages([...messages, { message: input }]);
    }
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH ELIEN ON 10/08/2020
      </p>
      <div className="chatScreen_list">
        {messages.map((message) => {
          return message.name ? (
            <div className="chatScreen_message">
              <Avatar
                className="chatScreen_avatar"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen_text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen_message">
              <p className="chatScreen_textUser">{message.message}</p>
            </div>
          );
        })}
      </div>
      <div className="chatScreen_input">
        <form className="chatScreen_form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen_inputbox"
            placeholder="Type a message ..."
            type="text"
          />
          <button onClick={handleSend} className="chatScreen_inputButton">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
