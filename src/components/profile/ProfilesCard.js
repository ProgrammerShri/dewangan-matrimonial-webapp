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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   {
  //     "albumId": 60,
  //     "id": 2971,
  //     "title": "dicta impedit aliquid",
  //     "url": "https://via.placeholder.com/600/79e173",
  //     "thumbnailUrl": "https://via.placeholder.com/150/79e173"
  // }
  return (
    <div className=" h-full w-full flex flex-col justify-center items-center">
      <h1>TINDER CARD</h1>
      {/* <ProfileCard imageURL={elonImg} title="Elon Musk" age="40" /> */}
      <ProfileCard imageURL={steveImg} title="Steve Jobs" age="60" />
      {/* <ProfileCard imageURL={jeffImg} title="Jeff Bezos" age="50" /> */}
    </div>
  );
};

export default ProfilesCard;
