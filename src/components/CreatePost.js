import React, { useEffect, useState } from "react";
import Page from "./Page";
import Axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [city, setCity] = useState();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await Axios.post(
        "/create-post",
        {
          title,
          body,
          city,
          token: localStorage.getItem("postToken")
        },
        console.log("post was created")
      );
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
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>city</small>
          </label>
          <input
            autoFocus
            name="city"
            id="post-city"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
            onChange={event => setCity(event.target.value)}
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

export default CreatePost;
