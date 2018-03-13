import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../../header/header_container";
import { style, key, show } from '../google_static_map_styling';
import dateFormat from 'dateFormat';

export default class RouteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (!Boolean(this.state.user) || newProps.route.user_id !== this.state.user.id) {
      this.props.fetchUser(newProps.route.user_id).then((user) => {
        this.setState({user});
      });
    }
  }

  componentDidMount() {
    const that = this;
    this.props.fetchRoute(this.props.id);
  }

  render() {
    let descriptionTag = null;
    if (this.props.route.description) {
      descriptionTag = (
        <div className="show-routes-bottom-border-div">
          <p>{this.props.description}</p>
        </div>
      );
    }

    this.url = show + style + '&path=color:0xff0000ff|weight:2%7Cenc:' + this.props.route.polyline + key;

    if (!Boolean(this.state.user)) {
      return (
        <div>
          <Header />
        </div>
      );
    }

    let time = null;
    if (this.props.route.estimated_duration === "--:--") {
      time = this.props.route.estimated_duration;
    } else {
      time =
        ("00" + Math.floor(this.props.route.estimated_duration / 3600)).slice(-2) +
        ":" +
        ("00" + Math.floor((this.props.route.estimated_duration % 3600) / 60)).slice(-2);
    }
    return (
      <div>
        <Header />
        <div id="route-show-page-container">
          <div id="route-show-address-div">
            <Link to="/routes">My Routes</Link>
            <span> / </span>
            <span>{this.props.route.title}</span>
          </div>
          <div id="route-show-title">
            <span>★</span>
            <h2>{this.props.route.title}</h2>
          </div>
          <div id="route-show-details">
            <img src={ this.url } className='map-index-item' id='show-map'/>

          <div>
            <div id="routes-show-user-profile" className="show-routes-bottom-border-div">
              <div>
                <Link to={`/users/${this.state.user.user.id}`}>
                  <img
                    src={`${window.profPic}`}
                    height="75"
                    width="75"
                    className="dropbtn"
                    />
                </Link>
              </div>
              <div>
                <h5>By {this.state.user.user.firstname} {this.state.user.user.lastname}</h5>
                <span>Created on {dateFormat(new Date(this.props.route.created_at), "mmmm dS, yyyy")}</span>
              </div>
            </div>


            <div>
              <div className="show-routes-bottom-border-div">
                <div id="route-show-detail-top">
                  <div>
                    <h6>{Math.round(this.props.route.distance * 0.621371)} mi</h6>
                    <label>Distance</label>
                  </div>
                  <div>
                    <h6>{Math.round(this.props.route.elevation_gain)} ft</h6>
                    <label>Elevation Gain</label>
                  </div>
                  <div>
                    <h6>{this.props.route.activity}</h6>
                    <label>Run Type</label>
                  </div>
                </div>
                <div id="route-show-detail-bottom">
                  <span>Est. Moving Time</span>
                  <p>{time}</p>
                </div>
              </div>
              { descriptionTag }
            </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
