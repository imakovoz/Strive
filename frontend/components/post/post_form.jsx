import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../header/header_container';


class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: '',
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }


  handleTitle(e) {
    this.setState({title: e.target.value});
  }
  handleBody(e) {
    this.setState({body: e.target.value});
  }

  handlePublish(post) {
    this.props.createPost(
      {
        title: this.state.title,
        body: this.state.body,
        author_id: this.props.current_user.id
      })
    .then(() => this.props.history.push('/'));
  }

  render() {

    let publishBtn = null;
    if (this.state.body) {
      publishBtn = <a onClick={this.handlePublish.bind(this)}
        className="post-form-inputs-btn" id="create-post-submit">Publish</a>;
    } else {
      publishBtn = <a className="post-form-inputs-btn"
        id="create-post-submit-disabled">Publish</a>;
    }

    return (
      <div >
        <Header />

        <div className="app-history">
          <Link to='/users'>Athletes</Link>
          <span>/</span>
            <Link to={`/users${this.props.current_user.id}`}>
            {this.props.current_user.firstname}
            {this.props.current_user.lastname}
          </Link>
          <span>/</span>
          <a>New Post</a>
        </div>

        <div id="CreatePostFormDiv">

          <div id="post-form-prof">

            <span id="post-form-prof-left">
              <div id="post-form-prof-pic">
                <img src="https://tinyurl.com/y8cc7jwt"
                height="75" width="75" />
              </div>
              <span>
                <span id="posting-as">Posting as</span>
                <h4 id="post-form-user-name">
                  {this.props.current_user.firstname + " "
                    + this.props.current_user.lastname}
                </h4>
              </span>
            </span>

            <span id="post-form-prof-right">
              <Link
                to={`/profile/${this.props.current_user.id}`}
                className="post-form-inputs-btn"
                id="discard-post-submit">Discard</Link>
              { publishBtn }
            </span>

          </div>


          <form id="CreatePostForm">
            <input className="post-form-inputs"
              type='text' value={this.state.title}
              onChange={this.handleTitle}
              placeholder="Add a title (optional)"
              id="post-form-input-title"></input>
            <textarea className="post-form-inputs"
              type='text'
              value={this.state.body}
              onChange={this.handleBody}
              placeholder="What's going on?"
              id="post-form-input-body"></textarea>
          </form>
        </div>
    </div>
    );
  }
}

export default withRouter(PostForm);
