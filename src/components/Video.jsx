import { Avatar } from "@material-ui/core";
import React from "react";
import "./Video.css";

const Video = ({ image, title, channelName, views, day, authorImage }) => {
  return (
    <div className="video__card">
      <img className = "videoCard__thumbnail" src={image} alt="" />

      <div className="videoCard__Info">
        <Avatar
          className="videoCard__avatar"
          alt={channelName}
          src={authorImage}
        />

        <div className="video__text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} . {day}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
