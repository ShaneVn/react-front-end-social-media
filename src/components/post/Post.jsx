import React from "react";
import { MoreVert } from "@material-ui/icons";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/2.jpeg" alt="" className="postProfileImg" />
            <span className="postUserName">Rich Goodwill</span>
            <span className="postDate">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">
                This is my first Post 
            </span>
        <img className = "postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
              <img src="/assets/like.png" alt="" className="likeIcon" />
              <img src="/assets/heart.png" alt="" className="likeIcon" />
              <span className="postlikeCounter">100 people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">50 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
