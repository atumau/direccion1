// ChatComponent.js
import React, { useState } from 'react';
import '../Chatbox/Chat.css'
import { IoMdChatboxes } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  // Function to handle sending messages
  const sendMessage = () => {
    // Implement sending message functionality here
    // Update messages state with the new message
  };
  const calladmin = () => {
    // Implement calling functionality here
    
  };

  return (
    <>
    <div className="chat-component">
      <div className="messages">
        {/* Render messages here */}
      </div>

      <IoMdChatboxes className='icon-chat' onClick={sendMessage}/>
    
    </div>
    <div className="chat-component2">
      <div className="messages">
        {/* Render messages here */}
      </div>

      
      <MdOutlineWifiCalling3 className='icon-chat' onClick={calladmin}/>
    </div>
    </>
  );
};

export default Chat;
