import React, { useState, useEffect, useRef } from "react";
import "../../src/Chat.css"
import { useParams } from "react-router-dom";

function Chat() {
  let {uid} = useParams();
  let fid = sessionStorage.getItem('userid');

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey 👋, welcome to chat!" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  /*useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);*/

  function getChats(){
    fetch(`http://localhost/chatapp/backend/apis.php?action=chats&fid=${fid}&toid=${uid}`)
        .then((response) => response.json())
        .then((data) => {
          
          setMessages(data); // userArr ko state me store karo
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
  }

  useEffect(() => {
      // PHP API se data fetch karna
      setInterval(() =>{
        getChats()
      },2000)

    }, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    setInput("");

    fetch(`http://localhost/chatapp/backend/apis.php?action=send&fid=${fid}&toid=${uid}&message=${input}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Message sent sucessfully!');
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-header">💬 Chat BOX </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              msg.from_id === fid ? "user" : "bot"
            }`}
          >
            {msg.message}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>➤</button>
      </div>
    </div>
  );
}

export default Chat;
