import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import HomeGuest from "./components/HomeGuest.js";
import Footer from "./components/Footer.js";
import Term from "./components/Term.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import CreatePost from "./components/CreatePost.js";

import "./App.css";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8081";

function App() {
  const [loggin, setLoggin] = useState(
    Boolean(localStorage.getItem("postToken"))
  );
  return (
    <BrowserRouter>
      <Header loggin={loggin} setLoggin={setLoggin} />
      <Switch>
        <Route path="/" exact>
          {loggin ? <Home /> : <HomeGuest />}
        </Route>
        <Route path="/create-post">
          <CreatePost />
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
  );
}

export default App;
