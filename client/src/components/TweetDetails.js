import React from "react";
import BigTweet from "./BigTweet";
import { useParams } from "react-router-dom";

const TweetDetails = () => {
  let { tweetId } = useParams();
  const [status, setStatus] = React.useState("loading");
  const [tweetData, setTweetData] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const tweetInfo = data.tweet;
        setTweetData(tweetInfo);
        setStatus("idle");
      });
  }, []);
  return (
    <div>
      {status !== "loading" ? (
        <BigTweet tweetData={tweetData}></BigTweet>
      ) : (
        <div> loading </div>
      )}
    </div>
  );
};

export default TweetDetails;
