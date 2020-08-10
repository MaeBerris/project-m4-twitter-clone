import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/me/profile", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw Error(`${res.status} error`);
        }
        return res.json();
      })
      .then((data) => {
        const profile = data.profile;
        setCurrentUser(profile);
        setStatus("idle");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        status,
        error,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
