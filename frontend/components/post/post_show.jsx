import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../header/header_container';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const formatDate = (d) => {
  const date = new Date(d);
  let hours = date.getHours();
  let minutes = date.getMinutes();
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

class PostShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPost(this.props.userId, this.props.postId);
  }

  render() {
      return (
        <div >
          <Header />

          <div className="app-history">
            <Link to='/users'>Athletes</Link>
            <span>/</span>
            <Link to={`/users/${this.props.current_user.id}`}>
              {this.props.current_user.firstname}
              {this.props.current_user.lastname}
            </Link>
            <span>/</span>
            <a>New Post</a>
          </div>

          <div id="CreatePostShowDiv">

            <div id="create-post-prof-div">

              <span id="show-prof-left">
                <div id="show-prof-pic">
                  <img src="https://tinyurl.com/y8cc7jwt"
                    height="75" width="75" />
                </div>
                <span id="show-user-info">
                  <h4 id="post-form-user-name">
                    {this.props.current_user.firstname + " " + this.props.current_user.lastname}
                  </h4>
                  <span id="posting-as">{formatDate(this.props.post.created_at)}</span>
                </span>
              </span>

              <span id="show-prof-right">
                <Link
                  to={`/users/${this.props.userId}/posts/${this.props.postId}/edit`}
                  id="post-show-edit-btn">
                  <img src={`${window.edit}`} id="show-edit" height="35"
                  width="35" />
                </Link>
              </span>

            </div>


            <div id="post-show-content">
              <h2 id="post-show-title">{this.props.post.title}</h2>
              <h4>{this.props.post.body}</h4>
            </div>
          </div>
        </div>
      );

  }
}

export default withRouter(PostShow);
