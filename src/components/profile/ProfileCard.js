/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Card } from "antd";

const ProfileCard = ({ title, url, age }) => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div>
      <Card
        className="card"
        hoverable
        style={{
          width: 290,
          height: 500,
          borderRadius: "10px",
        }}
        cover={
          <img
            alt="example"
            src={url}
            style={{
              borderRadius: "10px",
            }}
          />
        }
      >
        <div
          style={{
            width: "100%",
            margin: "0px",
            padding: "0px 0px 0px 10px",
            position: "absolute",
            bottom: "5px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,1,0.5)",
          }}
        >
          <span className="text-2xl font-bold">
            {title} : {age}
          </span>
          <span className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
