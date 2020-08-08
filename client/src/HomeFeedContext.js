import React from "react";

export const HomeFeedContext = React.createContext(null);

const HomeFeedContextProvider = ({ children }) => {
  const [feed, setFeed] = React.useState("loading");
  const [feedStatus, setFeedStatus] = React.useState("loading");

  return (
    <HomeFeedContext.Provider
      value={{
        feed,
        setFeed,
        feedStatus,
        setFeedStatus,
        feedStatus,
      }}
    >
      {children}
    </HomeFeedContext.Provider>
  );
};

export default HomeFeedContextProvider;
