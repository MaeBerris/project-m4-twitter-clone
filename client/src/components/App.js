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
import COLORS from "../constants";

function App() {
  const { status } = React.useContext(CurrentUserContext);
  return (
    <Router>
      <Wrapper>
        <Sidebar />
        <Main>
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
                {status !== "loading" ? (
                  <HomeFeed url="/api/me/home-feed" />
                ) : null}
              </div>
            </Route>
          </Switch>
        </Main>
      </Wrapper>
      <GlobalStyle />
    </Router>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 275px minmax(400px, 50%);
`;

const Main = styled.div`
  border-right: 1px solid ${COLORS.divider};
`;
export default App;