import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import GlobalStyle from "./GlobalStyles";
import Sidebar from "./Sidebar";
import TweetComposeBox from "./TweetComposeBox";
import { CurrentUserContext } from "../CurrentUserContext";
import Spinner from "./Spinner";
import ProfileContextProvider from "../ProfileContext";

function App() {
  const { status } = React.useContext(CurrentUserContext);
  return (
    <Router>
      <Wrapper>
        <Sidebar />
        <Switch>
          <Route path="/notifications">
            <Notifications />
          </Route>

          <Route path="/bookmarks">
            <Bookmarks />
          </Route>

          <Route path="/tweet/:tweetId">
            <TweetDetails />
          </Route>

          <Route path="/:profileId">
            <ProfileContextProvider>
              <Profile />
            </ProfileContextProvider>
          </Route>

          <Route exact path="/">
            <div>
              {status !== "loading" ? <TweetComposeBox /> : <Spinner />}
              {status !== "loading" ? <HomeFeed /> : null}
            </div>
          </Route>
        </Switch>
      </Wrapper>
      <GlobalStyle />
    </Router>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 275px minmax(400px, 50%);
`;
export default App;
