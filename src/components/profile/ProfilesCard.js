import React from "react";
import axios from "axios";
import { baseURL_API } from "../../utils/constants";
import TinderCard from "react-tinder-card";
import ProfileCard from "./ProfileCard";
import elonImg from "../../images/elon.jpg";
import steveImg from "../../images/steve.jpg";
import jeffImg from "../../images/jeff.jpg";

const ProfilesCard = () => {
  const [profiles, setProfiles] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseURL_API}/posts`)
      .then((res) => {
        setProfiles(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-screen overflow-hidden w-full flex bg-red-400 justify-center items-center">
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
              albumId={profile.albumId}
            />
          </TinderCard>
        );
      })}
    </div>
  );
};

export default ProfilesCard;
