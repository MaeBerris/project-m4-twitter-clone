import React from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const { profileId } = useParams();
  const [status, setStatus] = React.useState("loading");
  const [profileData, setProfileData] = React.useState(null);
  React.useEffect(() => {
    fetch(`api/${profileId}/profile`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
        setStatus("idle");
      });
  });
  return (
    <div>
      {status === "idle" ? (
        <ProfileInfo profileData={profileData} />
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Profile;
