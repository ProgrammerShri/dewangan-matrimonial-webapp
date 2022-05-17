import React from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/svgs/BackIcon";
import ThreeDotIcon from "../../assets/svgs/ThreeDotIcon";

const Message = () => {
  const navigate = useNavigate();
  const [option, setOption] = React.useState(false);
  return (
    <div className="flex flex-col justify-start items-center h-screen w-full">
      {/* Heading Section */}
      <div className=" flex justify-start items-center w-full bg-gray-900 fixed top-0">
        <div className="flex justify-between items-center  w-full">
          <span
            onClick={() => navigate("/messages")}
            className="cursor-pointer"
          >
            <BackIcon />
          </span>
          <span className="text-xl font-bold text-white"> Jhon Doe </span>
          <span className="cursor-pointer" onClick={() => setOption(!option)}>
            <ThreeDotIcon />
          </span>
          {option && (
            <span className="text-white bg-gray-800 absolute right-10 top-5 flex flex-col rounded-xl select-none ">
              <span className="text-lg p-4 hover:bg-white hover:text-black cursor-pointer rounded-xl">
                Report & Block
              </span>
              <span className="text-lg p-4 hover:bg-white hover:text-black cursor-pointer border-gray-300 rounded-xl">
                Delete
              </span>
            </span>
          )}
        </div>
      </div>

      {/* Chat Section  */}
      <div className="border overflow-y-auto  h-full shadow-2xl ">
        <div className="overflow-x-hidden w-full">
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              It will be used for a full tutorial about building a chat app with
              vue, tailwind and firebase.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              check my twitter to see when it will be released.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              It will be used for a full tutorial about building a chat app with
              vue, tailwind and firebase.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              check my twitter to see when it will be released.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>{" "}
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              It will be used for a full tutorial about building a chat app with
              vue, tailwind and firebase.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              check my twitter to see when it will be released.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>{" "}
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              It will be used for a full tutorial about building a chat app with
              vue, tailwind and firebase.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              check my twitter to see when it will be released.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>{" "}
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              It will be used for a full tutorial about building a chat app with
              vue, tailwind and firebase.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
              check my twitter to see when it will be released.
            </div>
          </div>
          <div className="clearfix">
            <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section Typing */}
      <div className="fixed z-50 bottom-0 border w-full flex justify-between bg-green-100">
        <textarea
          className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
          rows={1}
          placeholder="Message..."
          style={{ outline: "none" }}
          defaultValue={""}
        />
        <button className="m-2" style={{ outline: "none" }}>
          <svg
            className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Message;
