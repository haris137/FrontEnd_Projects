import React from "react";

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`${chat.role === "model" ? "ai" : "user"}-msg`}
      dangerouslySetInnerHTML={{ __html: chat.text }}
    ></div>
  );
};

export default ChatMessage;
