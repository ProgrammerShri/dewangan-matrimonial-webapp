import React from "react";
import axios from "axios";
import { baseURL_API } from "../../utils/constants";
import TinderCard from "react-tinder-card";
import ProfileCard from "./ProfileCard";
import { posts } from "../../data.js";

const ProfilesCard = () => {
  const [profiles, setProfiles] = React.useState(posts);

  return (
    <div className="h-screen overflow-hidden w-full flex  justify-center items-center">
      {profiles.map((profile) => {
        return (
          <TinderCard
            key={profile.id}
            className="swipe"
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => console.log("You swiped:", direction)}
            onCardLeftScreen={(myIdentifier) =>
              console.log(myIdentifier + " left the screen")
            }
          >
            <ProfileCard
              title={profile.title}
              url={profile.url}
              id={profile.id}
              age={profile.age}
              albumId={profile.albumId}
            />
          </TinderCard>
        );
      })}
    </div>
  );
};

export default ProfilesCard;
