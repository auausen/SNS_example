import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUsername">test test</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">hey its my first post</span>
          <img  className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postButtom">
          <div className="postBottomLeft">
            <img src="" alt="" />
          </div>
          <div className="postBottomRight"></div>
        </div>
      </div>
    </div>
  );
}