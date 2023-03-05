import React from 'react';
import { useState } from 'react';
import '../css/Chatbot.css';

const Chatbot=(props)=>{
  const messagesEndRef = React.useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // function to handle message submission
  const handleSubmit = (event) =>{
    event.preventDefault();
    // add new message to messages array
    const newMessage = {
      text: inputValue,
      isUser: true // mark user messages as true
    };

    messages.push(newMessage);
    setInputValue('');
    // call function to handle bot response
    handleBotResponse();
  }
  const handleInputChange = (event) =>{ 
    setInputValue(event.target.value);
  }

  // function to handle bot response
  const handleBotResponse=() =>{
    // code to generate bot response goes here
    // add new message to messages array
    const botResponse = {
      text: "Hi! How can I assist you?",
      isUser: false // mark bot messages as false
    };
    setInputValue('');
    messages.push(botResponse);
    //setMessages(botResponse);
  }

  // function to handle chatbot toggle button
  const handleToggle = () =>{
    console.log("im here");
    setIsOpen(!isOpen);
  }

  React.useEffect(() => {
    if (messagesEndRef.current) {
      // Scroll to the end of the messages list
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

    return (
      <div>
        <button className="btn btn-secondary Chatbot-toggle" onClick={handleToggle}>
          {isOpen ? "Close Chatbot" : "Open Chatbot"}
        </button>
        <div className={`Chatbot ${isOpen ? "open" : "closed"}`}>
          {isOpen &&
            <>
            <div className="Chatbot-messages-wrapper">
                <div className="Chatbot-messages">
                  {messages.map((message, index) => (
                    <div key={index} className={message.isUser ? "User-message" : "Bot-message"}>
                      {message.text}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="Chatbot-form">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            </>
          }
        </div>
      </div>
    );

}

export default Chatbot;
