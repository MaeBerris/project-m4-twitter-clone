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
import TweetComposeBox from "./components/TweetComposeBox";
import { CurrentUserContext } from "./CurrentUserContext";

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
            <Profile />
          </Route>

          <Route exact path="/">
            <div>
              {status !== "loading" ? <TweetComposeBox /> : null}
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
