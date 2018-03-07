import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const formatDate = (d) => {
  const date = new Date(d);
  let hours = date.getHours();
  let minutes = Math.round(date.getMinutes()/10) * 10;
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  const month = monthNames[date.getMonth()];
  return month + " " + date.getDate() + ", " + date.getFullYear() + " at " + strTime;
};

class PostItem extends React.Component {

  render() {
    // debugger
    if (this.props.user) {
      return (
        <div className="feed-item-container-div">
          <div className="feed-item-prof-pic-div">
            <Link to={`/users/${this.props.user.id}`} id="logo-link">
              <img src="https://tinyurl.com/y8cc7jwt" height="35"
              width="35" className="dropbtn" />
            </Link>
          </div>
          <div>
            <div className="feed-item-meta-div">
              <Link to={`/users/${this.props.user.id}`} id="logo-link">
              {this.props.user.firstname} {this.props.user.lastname}</Link>
            <span>{formatDate(this.props.post.created_at)}</span>
            </div>
            <div className="feed-item-post-div">
              <span>{this.props.post.title}</span>
              <span>{this.props.post.body}</span>
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
