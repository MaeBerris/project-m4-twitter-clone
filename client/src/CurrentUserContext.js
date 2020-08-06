import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch("api/me/profile", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const profile = data.profile;
        setCurrentUser(profile);
        setStatus("idle");
      })
      .catch((err) => console.log("Error is:", err));
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        status,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
