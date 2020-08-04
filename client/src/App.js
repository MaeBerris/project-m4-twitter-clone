import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import GlobalStyle from "./GlobalStyles";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Wrapper>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomeFeed />
          </Route>

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
            <Profile />
          </Route>
        </Switch>
      </Wrapper>
      <GlobalStyle />
    </Router>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
`;
export default App;
