import React from 'react';
import '../css/Chatbot.css';

class Chatbot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // boolean to track whether the chatbot is open or closed
      messages: [], // array to store chat messages
      inputValue: '', // input value for user messages
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // function to handle input change
  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  // function to handle message submission
  handleSubmit(event) {
    event.preventDefault();
    const newMessage = {
      text: this.state.inputValue,
      isUser: true // mark user messages as true
    };
    console.log()
    this.setState({
      messages: [...this.state.messages, newMessage],
      inputValue: ''
    });
    // call function to handle bot response
    this.handleBotResponse();
  }

  // function to handle bot response
  handleBotResponse() {
    // code to generate bot response goes here
    // add new message to messages array
    const botResponse = {
      text: "Hi! How can I assist you?",
      isUser: false // mark bot messages as false
    };
    this.setState({
      messages: [...this.state.messages, botResponse]
    });
  }

  // function to handle chatbot toggle button
  handleToggle() {
    console.log("im here");
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div>
        <button className="btn btn-secondary Chatbot-toggle" onClick={this.handleToggle}>
          {this.state.isOpen ? "Close Chatbot" : "Open Chatbot"}
        </button>
        <div className={`Chatbot ${this.state.isOpen ? "open" : "closed"}`}>
          {this.state.isOpen &&
            <>
              <div className="Chatbot-messages">
                {this.state.messages.map((message, index) => (
                  <div key={index} className={message.isUser ? "User-message" : "Bot-message"}>
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={this.handleSubmit} className="Chatbot-form">
                <input
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
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
  
  
}

export default Chatbot;
