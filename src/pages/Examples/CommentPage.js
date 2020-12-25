import React from "react";

/**
 * 提取用户comment:{author,text,date}
 */

// Avatar
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

// UserInfo
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

// Comment
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toLocaleDateString()}</div>
    </div>
  );
}

// 数据
const comment = {
  date: new Date(),
  text: "I enjoy learning React!",
  author: {
    name: "Hello Xiaoxu",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

function CommentPage(props) {
  return (
    <Comment date={comment.date} author={comment.author} text={comment.text} />
  );
}

export default CommentPage;
