import React from "react";
import { Link, withRouter } from "react-router-dom";

class Comment extends React.Component {
  formatDate(date) {
    const months31 = [1, 3, 5, 7, 8, 10, 12];
    let year = date.split("T")[0].split("-")[0];
    let month = date.split("T")[0].split("-")[1];
    let day = date.split("T")[0].split("-")[2];
    let hour = date.split("T")[1].split(":")[0];
    let minute = date.split("T")[1].split(":")[1];
    let second = date
      .split("T")[1]
      .split(":")[2]
      .slice(0, 2);

    hour -= 4;
    if (hour < 0) {
      hour += 24;
      day -= 1;
      if (day < 0) {
        if (months31.includes(month) && month !== 3) {
          day = 30;
        } else if (month === 3) {
          day = 28;
        } else {
          day = 31;
        }
        month -= 1;
        if (month < 1) {
          month = 12;
          year -= 1;
        }
      }
    }

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const user = this.props.users[this.props.comment.userid];
    let deleteComment = null;
    if (this.props.currentUser.id === user.id) {
      deleteComment = (
        <div className="delete-comment" onClick={this.handleDelete.bind(this)}>
          X
        </div>
      );
    }
    return (
      <div className="comment" key={this.props.keyVal}>
        <img src={user.profile_pic} height="40" width="40" />
        <div>
          <span>
            <h5>{user.firstname + " " + user.lastname}</h5>
            <h6>
              {moment(this.formatDate(this.props.comment.created_at)).fromNow()}
            </h6>
          </span>
          <div className="comment-body">
            <div>{this.props.comment.body}</div>
            {deleteComment}
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;
