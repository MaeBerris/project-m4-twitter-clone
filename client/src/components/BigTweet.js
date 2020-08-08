import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BigTweet = ({ tweetData }) => {
  return (
    <div>
      <div>{tweetData.author.handle}</div>
    </div>
  );
};

export default BigTweet;
