import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { CurrentUserContextProvider } from "./CurrentUserContext";
import HomeFeedContextProvider from "./HomeFeedContext";

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <HomeFeedContextProvider>
        <App />
      </HomeFeedContextProvider>
    </CurrentUserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
