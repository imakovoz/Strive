import React from "react";
import { Link, withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      timer: null,
      results: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.timer = null;
  }

  componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
      this.clearTimer();
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.clearTimer();
        this.setState({results: []});
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({results: nextProps.users});
  }

  setWrapperRef(node) {
      this.wrapperRef = node;
  }


  clearTimer() {
    clearTimeout(this.state.timer);
  }

  handleInput(e) {
    if (this.timer) {
      this.clearTimer();
    }
    const obj = {};
    obj["search"] = e.target.value;
    obj["timer"] = setTimeout(() => (this.props.searchUsers(this.state.search)), 250);
    this.setState(obj);
  }

  render() {

    let result = null;

    if (this.state.search) {
      result = this.state.results;
    } else {
      result = [];
    }

    return (
      <div id="search-wrapper" ref={this.setWrapperRef}>
        <div>Users</div>
        <form >
          <input type="text" onChange={this.handleInput} onFocusOut={this.clearTimer}/>
          <ul id="search-results">
            { result.map((user, i) => {
              return (
                <li>
                  <Link to={`/users/${user.id}`}>{user.firstname} {user.lastname} {user.email}</Link>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
