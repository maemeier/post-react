import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import HomeGuest from "./components/HomeGuest.js";
import Footer from "./components/Footer.js";
import Term from "./components/Term.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import CreatePost from "./components/CreatePost.js";
import ViewPost from "./components/SinglePost.js";
import FlashMessage from "./components/FlashMessage.js";
import Sample from "./Sample.js";

import "./App.css";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8081";

function App() {
  const initialState = {
    loggin: Boolean(localStorage.getItem("postToken")),
    flashMessage: []
  };
  const ourReducer = (state, action) => {
    switch (action.type) {
      case "loggin":
        return { loggin: true, flashMessage: state.flashMessage };
      case "logout":
        return { loggin: false, flashMessage: state.flashMessage };
      case "flashMessage":
        return {
          loggin: state.loggin,
          flashMessage: state.flashMessage.concat(action.value)
        };
    }
  };
  const [state, dispatch] = useReducer(ourReducer, initialState);
  //dispatch

  const [loggin, setLoggin] = useState(
    Boolean(localStorage.getItem("postToken"))
  );
  const [flashMessage, setFlashMessage] = useState([]);
  const addFlashMessage = message => {
    setFlashMessage(prev => prev.concat(message));
  };
  return (
    <Sample.Provider value={{ addFlashMessage, setLoggin }}>
      <BrowserRouter>
        <FlashMessage messages={flashMessage} />
        <Header loggin={loggin} />
        <Switch>
          <Route path="/" exact>
            {loggin ? <Home /> : <HomeGuest />}
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/post/:id">
            <ViewPost />
          </Route>
          <Route path="/term" exact>
            <Term />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Sample.Provider>
  );
}

export default App;
