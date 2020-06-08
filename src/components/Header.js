import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLogout from "./HeaderLogout";
import HeaderLoggin from "./HeaderLoggin";

function Header(props) {
  return (
    <div>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              POSTNISTA
            </Link>
          </h4>
          {props.loggin ? (
            <HeaderLoggin setLoggin={props.setLoggin} />
          ) : (
            <HeaderLogout setLoggin={props.setLoggin} />
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
