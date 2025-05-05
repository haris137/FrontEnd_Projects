import ChatMessage from "./ChatMessage.jsx"
import Main from "../services/GApi.js"
import React, { useRef, useState, useEffect } from "react";
import "../css/plotubot.css";

function Plotubot() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const inputRef = useRef()
  const [chatHistory, setChatHistory] = useState([]);

  const handleForm = async (e) => {
    e.preventDefault();
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;
    inputRef.current.value = "";

    // Add user message to chat history
    setChatHistory((history) => [...history, { role: "user", text: userMsg }]);

    setTimeout(async () => {
      const movieDesc = await Main(userMsg);


      const processedText = movieDesc
        .replace(/\*/g, "") 
        .replace(/\n/g, "<br />"); 

      setChatHistory((history) => [...history, { role: "model", text: processedText }]);
    }, 300);
  };

  return (
    <>
      <div className="chat" style={{ display: toggle ? "flex" : "none" }}>
        <div className="prompt">
          <div className="ai-msg">
           Hey there 👋! Enter movie name to know if it is worth watching.
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat}/>
          ))}

        </div>
        <form action='#' className="inpt" onSubmit={handleForm}>
            <input
            ref={inputRef}
              type="text"
              name=""
              id=""
              placeholder="Enter movie name"
              className="inpt-prmpt"
              required
            />
            <button className="submit-prmpt">⬆</button>
        </form>
      </div>
      <div className={`plotubot ${toggle ? `moved` : ``}`} onClick={handleToggle} title="Plotubot">
        <img src="/trace.svg" alt="paltobot" />
      </div>
    </>
  );
}

export default Plotubot;
