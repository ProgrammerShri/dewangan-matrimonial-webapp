import React from "react";
import ChatScreen from "../components/messages/ChatScreen";

const MessagesPage = () => {
  return (
    <div className="flex flex-col justify-start items-center h-full py-20  w-full">
      <h1>MESSAGES</h1>
      <ChatScreen />
    </div>
  );
};

export default MessagesPage;
