import React from "react";
import ChatScreen from "../components/messages/ChatScreen";

const MessagesPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full overflow-hidden">
      <h1 className="text-2xl bg-gray-900 text-white w-full text-center py-4 fixed z-50 top-0">
        MESSAGES
      </h1>
      <div className="w-full my-16 h-full">
        <ChatScreen />
        <ChatScreen />
        <ChatScreen />
      </div>
    </div>
  );
};

export default MessagesPage;
