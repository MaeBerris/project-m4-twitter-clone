import React from "react";
import styled from "styled-components";
import SmallTweet from "./SmallTweet";

const HomeFeed = () => {
  const [feed, setFeed] = React.useState(null);
  const [feedStatus, setFeedStatus] = React.useState("loading");
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
  }, []);

  return (
    <Wrapper>
      {feed && (
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
  max-width: 60%;
`;

export default HomeFeed;
