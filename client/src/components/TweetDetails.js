import React from "react";
import BigTweet from "./BigTweet";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ErrorScreen from "./ErrorScreen";

const TweetDetails = () => {
  let { tweetId } = useParams();
  const [status, setStatus] = React.useState("loading");
  const [tweetData, setTweetData] = React.useState(null);
  const [error, setBigTweetError] = React.useState(false);
  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setBigTweetError(true);
          throw Error("Tweet details server error");
        }
        return res.json();
      })
      .then((data) => {
        const tweetInfo = data.tweet;
        setTweetData(tweetInfo);
        setStatus("idle");
      })
      .catch((err) => console.log(err));
  }, [tweetId]);
  return (
    <div>
      {!error ? (
        <div>
          {status !== "loading" ? (
            <BigTweet tweetData={tweetData}></BigTweet>
          ) : (
            <Spinner />
          )}
        </div>
      ) : (
        <ErrorScreen errorType="tweet data loading" />
      )}
    </div>
  );
};

export default TweetDetails;
