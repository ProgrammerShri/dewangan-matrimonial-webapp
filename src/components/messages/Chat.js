import { Avatar } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../../assets/svgs/HeartIcon";

const Chat = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-start h-full w-full cursor-pointer m-1 ">
      <div
        className="flex justify-start items-start w-full md:w-1/3 p-3 border rounded-xl"
        onClick={() => navigate(`/messages/${user._id}`)}
      >
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
