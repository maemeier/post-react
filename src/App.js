import React, { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";

import Header from "./components/Header.js";
import HomeGuest from "./components/HomeGuest.js";
import Footer from "./components/Footer.js";
import Term from "./components/Term.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import CreatePost from "./components/CreatePost.js";
import ViewSinglePost from "./components/ViewSinglePost.js";
import StateContext from "./StateContext.js";
import DispatchContext from "./DispatchContext.js";
import FlashMessage from "./components/FlashMessage";
import Profile from "./components/Profile";
import "./App.css";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8081";

function App() {
  const initialState = {
    loggin: Boolean(localStorage.getItem("postToken")),
    flashMessage: [],
    user: {
      token: localStorage.getItem("postToken"),
      username: localStorage.getItem("username"),
      avatar: localStorage.getItem("avatar")
    }
  };
  const ourReducer = (draft, action) => {
    switch (action.type) {
      case "loggin":
        draft.loggin = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggin = false;
        return;
      case "flashMessage":
        draft.flashMessage.push(action.value);
        return;
    }
  };
  // save data to localStorage
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggin) {
      localStorage.setItem("postToken", state.user.token);
      localStorage.setItem("username", state.user.username);
      localStorage.setItem("avatar", state.user.avatar);
    } else {
      localStorage.removeItem("postToken");
      localStorage.removeItem("username");
      localStorage.removeItem("avatar");
    }
  }, [state.loggin]);
  //dispatch

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessage messages={state.flashMessage} />
          <Header />
          <Switch>
            <Route path="/" exact>
              {state.loggin ? <Home /> : <HomeGuest />}
            </Route>
            <Route path="/create-post">
              <CreatePost />
            </Route>
            <Route path="/post/:id">
              <ViewSinglePost />
            </Route>
            <Route path="/term" exact>
              <Term />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile/:username">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
