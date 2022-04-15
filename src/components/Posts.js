import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import Post from '../images/post.jpg'
import Profile from '../images/profile.jpeg'
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src={Profile} alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Nihal Mulla</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @imNMulla <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          For today's hump day 🐫 I wanted to share a way to merge arrays in
          #JavaScript using the spread operator. Hope this helps when dealing
          with algorithms! #100Devs #100DaysOfCode
        </div>
        <div className="postss__details__img">
          <img src={Post} alt="post" />
        </div>

        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
