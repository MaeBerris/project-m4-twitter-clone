import React from "react";

export const HomeFeedContext = React.createContext(null);

const HomeFeedContextProvider = ({ children }) => {
  const [feed, setFeed] = React.useState(null);
  const [feedStatus, setFeedStatus] = React.useState("loading");
  return (
    <HomeFeedContext.Provider
      value={{
        feed,
        setFeed,
        feedStatus,
        setFeedStatus,
      }}
    >
      {children}
    </HomeFeedContext.Provider>
  );
};

export default HomeFeedContextProvider;
