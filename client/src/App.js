import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "./components/Bookmarks";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import GlobalStyle from "./components/GlobalStyles";
import Sidebar from "./components/Sidebar";
import { CurrentUserContext } from "./CurrentUserContext";

function App() {
  const { currentUser, status } = React.useContext(CurrentUserContext);
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
