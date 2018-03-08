import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
//TODO add in type posts dont get time but workouts do
const formatDate = (d, t) => {
  const date = new Date(d);
  let hours = date.getHours();
  let minutes = Math.round(date.getMinutes()/10) * 10;
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  const month = monthNames[date.getMonth()];
  return month + " " + date.getDate() + ", " + date.getFullYear() + " at " + strTime;
};

class PostItem extends React.Component {

  render() {
    if (this.props.user) {
      return (
        <div className="feed-item-container-div">
          <div className="feed-item-prof-pic-div">
            <Link to={`/users/${this.props.user.id}`}>
              <img src="https://tinyurl.com/y8cc7jwt" height="50"
              width="50" className="dropbtn" />
            </Link>
          </div>
          <div className="feed-item-content-div">
            <div className="feed-item-meta-div">
<Link to={`/users/${this.props.user.id}`} className="feed-item-post-user">
{this.props.user.firstname} {this.props.user.lastname}</Link>
            <span className="feed-item-date-span">
              {formatDate(this.props.post.created_at)}
            </span>
            </div>
            <div className="feed-item-post-div">
  <Link to={`/users/${this.props.user.id}/posts/${this.props.post.id}`}
  className="feed-item-title">{this.props.post.title}</Link>
  <Link to={`/users/${this.props.user.id}/posts/${this.props.post.id}`}
  className="feed-item-body">{this.props.post.body}</Link>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
      }
    }
}

export default PostItem;
