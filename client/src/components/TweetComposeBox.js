import React from "react";
import styled from "styled-components/macro";
import { CurrentUserContext } from "../CurrentUserContext";
import COLORS from "../constants";
import { HomeFeedContext } from "../HomeFeedContext";

const TweetComposeBox = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [numOfLetters, setNumOfLetters] = React.useState(280);
  const [color, setColor] = React.useState("grey");
  const [value, setValue] = React.useState("");
  const { setFeed } = React.useContext(HomeFeedContext);

  const FetchRequest = () => {
    fetch("api/tweet", {
      method: "POST",
      body: JSON.stringify({
        status: value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return fetch("/api/me/home-feed", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setFeed(data);
            setValue("");
          });
      });
  };

  return (
    <Wrapper>
      <Avatar src={currentUser.avatarSrc} />
      <form>
        <TextInput
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
            setNumOfLetters(280 - ev.target.value.length);
            setColor("grey");
            if (
              280 - ev.target.value.length < 55 &&
              280 - ev.target.value.length >= 0
            ) {
              setColor("yellow");
            } else if (280 - ev.target.value.length < 0) {
              setColor("red");
            }
          }}
        />
      </form>
      <ButtonArea>
        <NumberDisplay style={{ color: color }}>{numOfLetters}</NumberDisplay>
        {numOfLetters < 0 ? (
          <DisabledButton disabled>Meow</DisabledButton>
        ) : (
          <StyledButton onClick={FetchRequest}>Meow</StyledButton>
        )}
      </ButtonArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 5px solid ${COLORS.divider};
  border-right: 1px solid ${COLORS.divider};
  padding: 10px;
  display: grid;
  grid-template-columns: 50px 1fr 120px;
  height: 200px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const TextInput = styled.textarea`
  border: none;
  font-size: 1.3em;
  padding: 10px;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledButton = styled.button`
  background-color: ${COLORS.primary};
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 50%;
`;

const DisabledButton = styled.button`
  background-color: ${COLORS.primary};
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 50%;
  opacity: 55%;
  cursor: none;
`;

const NumberDisplay = styled.span`
  margin-right: 15px;
`;

export default TweetComposeBox;
