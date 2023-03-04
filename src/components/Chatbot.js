import React from 'react';
import { useState } from 'react';
import '../css/Chatbot.css';

// class Chatbot extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false, // boolean to track whether the chatbot is open or closed
//       messages: [], // array to store chat messages
//       inputValue: '', // input value for user messages
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleToggle = this.handleToggle.bind(this);
//   }

//   // function to handle input change

const Chatbot=(props)=>{
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
    setInputValue(event.target.value);
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
    messages.push(botResponse);
    setMessages(messages);
  }

  // function to handle chatbot toggle button
  const handleToggle = () =>{
    console.log("im here");
    setIsOpen(!isOpen);
  }

    return (
      <div>
        <button className="btn btn-secondary Chatbot-toggle" onClick={handleToggle}>
          {isOpen ? "Close Chatbot" : "Open Chatbot"}
        </button>
        <div className={`Chatbot ${isOpen ? "open" : "closed"}`}>
          {isOpen &&
            <>
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
            </>
          }
        </div>
      </div>
    );

}

export default Chatbot;
