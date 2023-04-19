import React from 'react';
import { useState } from 'react';
import '../css/Chatbot.css';
import axios from 'axios';
import OPEN_API_KEY from '../Env';


const openapiUrl = "https://api.openai.com/v1/chat/completions";


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
    setMessages([...messages, newMessage])
    setInputValue('');
    // call function to handle bot response
    handleBotResponse();
  };
  const handleInputChange = (event) =>{ 
    setInputValue(event.target.value);
  };

  // function to handle bot response
  const handleBotResponse= async () =>{
    // code to generate bot response goes here
    const botRequest = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": inputValue+" Act as chatbot for music producers. Answer in 15-20 words."}]
    }
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer '+OPEN_API_KEY
      }
    };
    console.log(axiosConfig);

    try {
      const response = await axios.post(openapiUrl,botRequest,axiosConfig); // Replace 'yourOperationId' with the operationId from your OpenAPI spec
      const botMessage = response.data['choices'][0]['message']['content'];
      console.log(botMessage);
      const botResponse = {
        text: botMessage,
        isUser: false // mark bot messages as false
      };
      setInputValue('');
      // setMessages([...messages, botResponse])
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }

    // add new message to messages array
    
    //setMessages(botResponse);
  }

  // function to handle chatbot toggle button
  const handleToggle = () =>{
    console.log("im here");
    setIsOpen(!isOpen);
  }

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Scroll to the end of the messages list
      messagesEndRef.current.scrollIntoView({top: 30, behavior: 'smooth' });
    }
  };
  React.useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].isUser) {
      // handleBotResponse();
    };
    scrollToBottom();
  }, [messages]);

    return (
      <div>
        <button className={`Chatbot-toggle ${isOpen ? "open" : "closed"}`} onClick={handleToggle}>
            <i className="fas fa-comment-dots"></i>
        </button>
        <div className={`Chatbot ${isOpen ? "open" : "closed"}`}>
          {isOpen &&
            <>
              <div className="Chatbot-header">
                <button className="Chatbot-close" onClick={handleToggle}>
                  <i className="fas fa-times"></i>
                </button>
                <h4>Music Chatbot</h4>
              </div>
              <div className="Chatbot-content">
                <div className="Chatbot-messages-wrapper">
                  <div className="Chatbot-messages">
                    {messages.map((message, index) => (
                      <div key={index} className={message.isUser ? "User-message" : "Bot-message"}>
                        {message.text}
                      </div>
                    ))}
                    <div ref={messagesEndRef}></div>
                  </div>
                </div>
                <div className="Chatbot-form">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Type a message..."
                      className='form-control'
                    />
                  </form>
                  <button className="" type="submit"> <i className="fas fa-paper-plane"></i></button>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    );

}

export default Chatbot;
