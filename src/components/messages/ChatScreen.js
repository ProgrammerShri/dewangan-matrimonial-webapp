import { Divider } from "antd";
import React from "react";
import Chat from "./Chat";

const msgs = [
  {
    id: 1,
    text: "Hello",
    user: {
      _id: 1,
      name: "John Doe",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
  },
  {
    id: 2,
    text: "Hello",
    user: {
      _id: 2,
      name: "John Doe",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
  },
  {
    id: 3,
    text: "Hello",
    user: {
      _id: 3,
      name: "John Doe",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
  },
];

const ChatScreen = () => {
  return (
    <>
      {msgs.map((msg) => (
        <div key={msg.id} className="w-full">
          <Chat user={msg.user} />
        </div>
      ))}
    </>
  );
};
export default ChatScreen;
