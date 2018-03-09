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
    let linker = null;
    let details = null;
    const dist_uom_conv = {miles: "mi", kilometers: "km", meters: "m", yards: "yd"};
    if (this.props.post.distance) {
      linker = "workouts";
      let pace = null;
      let base  = this.props.post.duration / this.props.post.distance;
      if (base >= 360) {
        let hr = base/360;
        let min = ("0" + (base % 360) /60).slice(-2);
        let sec = ("0" + base % 60).slice(-2);
        pace = hr + ":" + min + ":" + sec;
      } else {
        let min = base/60;
        let sec = ("0" + base % 60).slice(-2);
        pace = min + ":" + sec;
      }
      details = (
        <div className="feed-item-content-details">
          <a className="feed-item-details">{this.props.post.body}</a>
        {/* cannot use mapsfloor on minutes */}
          <a className="feed-item-details">{Math.floor(this.props.post.duration/360)}h {Math.floor((this.props.post.duration % 360)/60)}m</a>
          <a className="feed-item-details">{this.props.post.distance} {this.props.post.distance_uom.slice(0, -1)}</a>
          <a className="feed-item-details">{pace}/{dist_uom_conv[this.props.post.distance_uom]}</a>
        </div>
    );
    } else {
      linker = "posts";
      details = <Link to={`/users/${this.props.user.id}/${linker}/${this.props.post.id}`}
        className="feed-item-body">{this.props.post.body}</Link>;
    }
    return (
      <div className="feed-item-container-div">
        <div className="feed-item-prof-pic-div">
          <Link to={`/users/${this.props.user.id}`}>
            <img src={`${window.profPic}`} height="50"
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
<Link to={`/users/${this.props.user.id}/${linker}/${this.props.post.id}`}
className="feed-item-title">{this.props.post.title}</Link>

          { details }

          </div>
        </div>
      </div>
    );

}
}
export default PostItem;
