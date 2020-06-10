import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext.js";

const HeaderLoggin = props => {
  const appDispatch = useContext(DispatchContext);

  const handleLoggedout = () => {
    appDispatch({ type: "logout" });
    localStorage.removeItem("postToken");
    localStorage.removeItem("username");
    localStorage.removeItem("avatar");
  };
  return (
    <div>
      <div className="flex-row my-3 my-md-0">
        <a href="#" className="text-white mr-2 header-search-icon">
          <i className="fas fa-search"></i>
        </a>
        <span className="mr-2 header-chat-icon text-white">
          <i className="fas fa-comment"></i>
          <span className="chat-count-badge text-white"> </span>
        </span>
        <a href="#" className="mr-2">
          <img
            className="small-header-avatar"
            src={localStorage.getItem("avatar")}
          />
        </a>
        <Link className="btn btn-sm btn-success mr-2" to="/create-post">
          Create Post
        </Link>
        <button onClick={handleLoggedout} className="btn btn-sm btn-secondary">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default HeaderLoggin;
