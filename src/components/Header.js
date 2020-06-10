import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import HeaderLogout from "./HeaderLogout";
import HeaderLoggin from "./HeaderLoggin";
import StateContext from "../StateContext";

function Header(props) {
  const appState = useContext(StateContext);
  return (
    <div>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              POSTNISTA
            </Link>
          </h4>
          {appState.loggin ? <HeaderLoggin /> : <HeaderLogout />}
        </div>
      </header>
    </div>
  );
}

export default Header;
