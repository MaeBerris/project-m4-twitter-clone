import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
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
      <GlobalStyle />
    </Router>
  );
}

export default App;
