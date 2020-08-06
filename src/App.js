import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCard/TinderCards/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./components/TinderCard/Swipebuttons/SwipeButtons";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/Chats/ChatScreen/ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Header */}
          {/* Chats screen */}
          {/* Indvidual chat screen */}
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          {/* Header */}
          {/* Chats screen */}
          {/* Indvidual chat screen */}
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          {/* Header */}
          {/* Tinder Card */}
          {/* Group Button */}
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
