import React from "react";
import "../css/contact.css";
import Chatbot from 'react-chatbot-kit';
import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";

const Contact = () => {
  return (
  <div className="contact">
    <div style={{maxwidth: "300px"}}></div>
    <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser} 
          />
    </div>
  );
};

export default Contact;
