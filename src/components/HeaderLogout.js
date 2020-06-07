import React, { useEffect, useState } from "react";
import Axios from "axios";

const { logout, setLogout } = useEffect;

function HeaderLogout(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await Axios.post("http://localhost:8081/login", {
        username,
        password
      });
      props.setLoggin(true);
    } catch (error) {
      console.log("there was an error");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center">
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input
              onChange={event => setUsername(event.target.value)}
              name="username"
              className="form-control form-control-sm input-dark"
              type="text"
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input
              onChange={event => setPassword(event.target.value)}
              name="password"
              className="form-control form-control-sm input-dark"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success btn-sm">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HeaderLogout;
