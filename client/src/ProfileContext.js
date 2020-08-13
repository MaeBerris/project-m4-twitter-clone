import React from "react";
import { useParams } from "react-router-dom";

export const ProfileContext = React.createContext(null);

const ProfileContextProvider = ({ children }) => {
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
  }, [profileId]);

  return (
    <ProfileContext.Provider
      value={{ status, setStatus, profileData, setProfileData, profileId }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
