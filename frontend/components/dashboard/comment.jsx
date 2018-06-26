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

  render() {
    debugger;
    const user = this.props.users[this.props.comment.userid];
    return (
      <div className="comment" key={this.props.keyVal}>
        <img src={user.profile_pic} height="40" width="40" />
        <div>
          <h6>{user.firstname + " " + user.lastname}</h6>
          {this.props.comment.body}
          {moment(this.formatDate(this.props.comment.created_at)).fromNow()}
        </div>
      </div>
    );
  }
}
export default Comment;
