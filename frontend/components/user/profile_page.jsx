import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../header/header_container';


class ProfilePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggle: "number",
    };

    this.chart = null;
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.profile_id)
      .then(() => this.props.fetchFilteredWorkouts([this.props.profile_id]))
      .then((workouts) => this.setState({workouts: this.props.styleWorkoutsForVisualization(workouts.workouts, "number")}))
      .then(() => { google.charts.load("current", {packages:["calendar"]});
        google.charts.setOnLoadCallback(this.drawChart.bind(this));
      });

  }

  drawChart() {
    var dataTable = new google.visualization.DataTable();
       dataTable.addColumn({ type: 'date', id: 'Date' });
       dataTable.addColumn({ type: 'number', id: 'Workouts' });
       dataTable.addRows(this.state.workouts);

      var chart = new google.visualization.Calendar(document.getElementById('profile-calendar-workouts'));

       var options = {
         title: "Workouts",
         height: 200,
       };

       chart.draw(dataTable, options);
  }

  toggle(str) {
    this.setState({
      toggle: str,
      workouts: this.props.styleWorkoutsForVisualization(this.props.workouts, str),
    }, this.drawChart.bind(this));
  }

  render() {
    if (this.props.user_profile) {
      return (
        <div>
          <Header />
          <div id="current-user-profile-wrapper">
            <div id="current-user-profile">
              <img
                src={`${window.profPic}`}
                height="150"
                width="150"
              />
              <h3>{this.props.current_user.firstname} {this.props.current_user.lastname}</h3>
            </div>
            <div>
              <div id="profile-calendar-workouts"></div>
              <ul id="profile-page-chart-toggle">Toggle Chart
                <li onClick={() => this.toggle("number")}>Number of workouts</li>
                <li onClick={() => this.toggle("distance")}>Miles moved</li>
                <li onClick={() => this.toggle("duration")}>Duration (s)</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default withRouter(ProfilePage);
