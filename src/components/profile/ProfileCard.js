/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Card } from "antd";
import TinderCard from "react-tinder-card";

const { Meta } = Card;

const ProfileCard = ({ imageURL, title, age }) => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
        style={{ borderRadius: "10px" }}
      >
        <div className="">
          <Card
            hoverable
            style={{
              width: 290,
              height: 500,
              borderRadius: "10px",
              boxShadow: "0px 10px 0px #000000",
            }}
            cover={
              <img
                alt="example"
                src={imageURL}
                style={{ borderRadius: "10px" }}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </TinderCard>
    </div>
  );
};

export default ProfileCard;

{
  /* <div className=" bg-red-600  rounded-2xl shadow-2xl flex flex-col justify-center items-center relative m-2   ">
      <div className="h-96 w-full object-contain absolute ">
        <img
          src={imageURL}
          alt="profile"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="">
        <h1 className="text-white text-2xl font-bold"> {title}</h1>
        <p className="text-white text-xl"> Age : {age}</p>
        <p className="text-white text-xl"> Location : New York</p>
      </div>
    </div> */
}
