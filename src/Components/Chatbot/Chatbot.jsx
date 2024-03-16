import React, { useState } from 'react';
import '../../css/Chatbot.css'; 

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSubmit = () => {
    if (inputText.trim() === '') return;

    // Send user message
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');

    // Simulate bot reply (You would replace this with actual bot logic)
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: `You said: ${inputText}`, sender: 'bot' },
      ]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === 'bot' ? 'bot-message' : 'user-message'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleMessageSubmit();
            }
          }}
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;