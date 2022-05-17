/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Card } from "antd";

const { Meta } = Card;

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
              borderRadius: "10px 10px 0 0",
            }}
          />
        }
      >
        <div className="flex justify-center items-center h-full p-4">
          <div className="self-end">
            <span className="text-2xl font-bold self-end">
              {`${title}, ${age}`}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
