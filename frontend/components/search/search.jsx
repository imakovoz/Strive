import React from "react";
import { Link, withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      timer: null,
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.timer = null;
  }
  componentDidMount() {

  }

  componentWillUnmount() {
    this.clearTimer;
  }

  clearTimer() {
    clearInterval(this.state.timer);
  }

  handleInput(e) {
    if (this.timer) {
      this.clearTimer;
    }
    const obj = {};
    obj["search"] = e.target.value;
    obj["timer"] = setInterval(() => (this.props.searchUsers(this.state.search)), 5000);
    this.setState(obj);
  }


  render() {

    return (
      <div id="search-wrapper">
        <div>Users</div>
        <form onfocusout={this.clearTimer}>
          <input type="text" onChange={this.handleInput} />
          <ul id="search-results">
            { this.props.users.map((user, i) => {
              return (
                <div>{user.firstname} {user.lastname} {user.email}</div>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
