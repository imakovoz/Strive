import React from "react";
import { Link, withRouter } from "react-router-dom";
import Comment from "./comment";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const formatDate = (d, t) => {
  const date = new Date(d);
  let hours = date.getHours();
  let minutes = Math.round(date.getMinutes() / 10) * 10;
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  const month = monthNames[date.getMonth()];
  return (
    month + " " + date.getDate() + ", " + date.getFullYear() + " at " + strTime
  );
};

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: false,
      body: ""
    };
    this.handleBody = this.handleBody.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  handleLike(e) {
    this.props.createLike(this.props.post);
  }

  toggleComment(e) {
    if (this.state.commentInput === false) {
      this.setState({
        commentInput: true,
        body: ""
      });
    } else {
      this.setState({
        commentInput: false,
        body: ""
      });
    }
  }

  handleBody(e) {
    this.setState({ body: e.target.value });
  }

  postComment() {
    this.props.postComment(this.props.post, this.state.body);
    this.setState({
      commentInput: false,
      body: ""
    });
  }

  onEnterPress(e) {
    if (e.keyCode == 13 && e.shiftKey == false && this.state.body.length < 1) {
      this.setState({
        commentInput: false,
        body: ""
      });
    } else if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.postComment();
    }
  }

  componentDidUpdate() {
    if (this.state.commentInput === true) {
      this.commentInput.focus();
    }
  }

  render() {
    let comments = null;
    let commentArr = [];
    this.props.comments.forEach(comment => {
      if (
        comment.commentable.id === this.props.post.id &&
        !!this.props.post.activity === !!comment.commentable.activity
      ) {
        commentArr.push(comment);
      }
    });
    if (commentArr.length > 0) {
      comments = (
        <div className="post-comments">
          {commentArr.map((comment, i) => {
            return (
              <Comment comment={comment} keyVal={i} users={this.props.users} />
            );
          })}
        </div>
      );
    }

    let commentInput = null;
    if (this.state.commentInput === true) {
      commentInput = (
        <textarea
          className="comment-input"
          type="text"
          value={this.state.body}
          onChange={this.handleBody}
          onKeyDown={this.onEnterPress}
          ref={input => {
            this.commentInput = input;
          }}
          placeholder="Your comment here"
        />
      );
    }

    let likeCount = null;
    let tester = 0;
    let likePics = null;
    let picsArr = [];
    this.props.likes.forEach(like => {
      // debugger;
      if (
        like.postable.id === this.props.post.id &&
        !!this.props.post.activity === !!like.postable.activity
      ) {
        tester += 1;
        if (tester < 4) {
          // debugger;
          picsArr.push(
            <img
              className="entry-like-pics"
              src={this.props.users[like["userid"]].profile_pic}
              title={
                this.props.users[like["userid"]].firstname +
                " " +
                this.props.users[like["userid"]].lastname
              }
              height="20"
              width="20"
              key={tester}
            />
          );
        }
      }
    });
    likePics = (
      <div className="entry-like-pics">
        {picsArr.map(pic => {
          return pic;
        })}
      </div>
    );
    if (tester > 3) {
      likeCount = (
        <div className="entry-like-count">and {tester - 3} more like this</div>
      );
    } else if (tester > 1) {
      likeCount = <div className="entry-like-count">like this</div>;
    } else if (tester === 1) {
      likeCount = <div className="entry-like-count">likes this</div>;
    }

    let linker = null;
    let details = null;
    const dist_uom_conv = {
      miles: "mi",
      kilometers: "km",
      meters: "m",
      yards: "yd"
    };
    if (this.props.post.activity) {
      linker = "workouts";
      let pace = null;
      let base = this.props.post.duration / this.props.post.distance;
      if (base >= 360) {
        let hr = Math.floor(base / 360);
        let min = ("0" + (base % 360) / 60).slice(-2);
        let sec = ("0" + base % 60).slice(-2);
        pace = hr + ":" + min + ":" + sec;
      } else if (base >= 60) {
        let min = Math.floor(base / 60);
        let sec = ("0" + base % 60).slice(-2);
        pace = min + ":" + sec;
      } else if (base >= 1) {
        pace = base + "s";
      } else {
        pace = "1s";
      }
      let movingTime = null;
      if (this.props.post.duration) {
        movingTime = (
          <div>
            <span className="entry-detail-label">Moving Time</span>
            <a className="feed-item-details">
              {Math.floor(this.props.post.duration / 360)}h{" "}
              {Math.floor((this.props.post.duration % 360) / 60)}m
            </a>
          </div>
        );
      } else {
        movingTime = <div />;
      }
      let distance = null;
      if (this.props.post.distance) {
        distance = (
          <div>
            <span className="entry-detail-label">Distance</span>
            <a className="feed-item-details">
              {this.props.post.distance}{" "}
              {this.props.post.distance_uom.slice(0, -1)}
            </a>
          </div>
        );
      } else {
        distance = <div />;
      }
      let entryPace = null;
      if (this.props.post.distance) {
        entryPace = (
          <div>
            <span className="entry-detail-label">Average Pace</span>
            <a className="feed-item-details">
              {pace}/{dist_uom_conv[this.props.post.distance_uom]}
            </a>
          </div>
        );
      } else {
        entryPace = <div />;
      }

      let spacers = null;
      if (this.props.post.distance) {
        spacers = <hr />;
      } else {
        spacers = <div />;
      }

      details = (
        <div className="feed-item-content-details">
          {movingTime}
          {spacers}
          {distance}
          {spacers}
          {entryPace}
        </div>
      );
    } else {
      linker = "posts";
      details = (
        <Link
          to={`/users/${this.props.user.id}/${linker}/${this.props.post.id}`}
          className="feed-item-post-body"
        >
          {this.props.post.body}
        </Link>
      );
    }
    let activityImg = null;
    if (this.props.post.activity) {
      activityImg = (
        <img src={`${window.runningShoe}`} height="24" width="24" />
      );
    } else {
      activityImg = <div className="no-activity-image" />;
    }
    return (
      <div className="post-item-container" key={this.props.keyVal}>
        <div className="entry-header">
          <Link to={`/users/${this.props.user.id}`}>
            <img
              src={`${this.props.user.profile_pic}`}
              height="40"
              width="40"
            />
          </Link>
          <div className="entry-header-details">
            <Link
              to={`/users/${this.props.user.id}`}
              className="feed-item-post-user"
            >
              {this.props.user.firstname} {this.props.user.lastname}
            </Link>
            <span className="feed-item-date-span">
              {formatDate(this.props.post.created_at)}
            </span>
          </div>
        </div>
        <div className="entry-body">
          {activityImg}
          <div>
            <Link
              to={`/users/${this.props.user.id}/${linker}/${
                this.props.post.id
              }`}
              className="feed-item-title"
            >
              {this.props.post.title}
            </Link>
            {details}
          </div>
        </div>
        <div className="entry-footer">
          <span className="entry-likes">
            {likePics}
            {likeCount}
          </span>
          <span className="entry-footer-btns">
            <img
              src={`${window.like}`}
              height="16"
              width="17"
              onClick={this.handleLike.bind(this)}
            />
            <img
              src={`${window.comment}`}
              height="16"
              width="17"
              onClick={this.toggleComment.bind(this)}
            />
          </span>
        </div>
        {comments}
        {commentInput}
      </div>
    );
  }
}
export default PostItem;
