import { Avatar } from "antd";
import React from "react";
import HeartIcon from "../../assets/svg/HeartIcon";

const Chat = ({ user }) => {
  return (
    <div className="flex justify-center items-start h-full w-full   my-1">
      <div className="flex justify-start items-start w-full md:w-1/3 p-3 border ">
        <Avatar src={`${user.avator}`} size={60} className="w-2/5 " />
        <div className=" w-3/5 px-3 text-left flex flex-col">
          <span className="text-xl font-bold">John Doe</span>
          <span className="text-lg font-bold flex items-center">
            <span className="mr-6">3 New Messages</span> <HeartIcon />
          </span>
        </div>
        <span>
          <span className="text-sm text-gray-600">
            {new Date().toLocaleTimeString()}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Chat;
