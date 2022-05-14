/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Card } from "antd";
import TinderCard from "react-tinder-card";

const { Meta } = Card;

const ProfileCard = ({ title, url }) => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 290,
          height: 500,
          borderRadius: "10px",
          boxShadow: "0px 10px 0px #000000",
        }}
        cover={<img alt="example" src={url} style={{ borderRadius: "10px" }} />}
      >
        <Meta title={title} />
      </Card>
    </div>
  );
};

export default ProfileCard;
