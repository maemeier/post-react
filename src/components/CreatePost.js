import React, { useEffect, useState, useContext } from "react";
import Page from "./Page";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import DispatchContext from "../DispatchContext.js";

const CreatePost = props => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const appDispatch = useContext(DispatchContext);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await Axios.post("/create-post", {
        title,
        body,
        token: localStorage.getItem("postToken")
      });
      appDispatch({
        type: "flashMessage",
        value: "Yippy! You created new post!"
      });
      props.history.push(`/post/${response.data}`);
    } catch (err) {
      console.log("there was an error");
    }
  }
  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
            onChange={event => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
            onChange={event => setBody(event.target.value)}
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  );
};

export default withRouter(CreatePost);
