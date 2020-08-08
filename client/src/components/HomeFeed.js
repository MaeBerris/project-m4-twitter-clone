import React from "react";
import styled from "styled-components";
import SmallTweet from "./SmallTweet";
import { HomeFeedContext } from "../HomeFeedContext";

const HomeFeed = () => {
  const { feed, setFeed, setFeedStatus, feedStatus } = React.useContext(
    HomeFeedContext
  );

  React.useEffect(() => {
    fetch("api/me/home-feed", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeed(data);
        setFeedStatus("idle");
      })
      .catch((err) => console.log(err));

    return () => {
      setFeedStatus("loading");
    };
  }, []);

  return (
    <Wrapper>
      {feedStatus === "idle" && (
        <div>
          {feed.tweetIds.map((tweetId, index) => {
            const tweetData = feed.tweetsById[tweetId];
            return <SmallTweet key={tweetId + index} tweetData={tweetData} />;
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomeFeed;
