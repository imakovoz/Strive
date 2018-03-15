import React from "react";
import { Link, withRouter } from "react-router-dom";
import PostItem from "./post_item";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

  }
  componentDidMount() {

  }



  render() {

    return (
      <div id="search-wrapper">
        <div>Users</div>
        <form>
          <input type="text"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
