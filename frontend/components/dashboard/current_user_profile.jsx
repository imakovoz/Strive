import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CurrentUserProfile extends React.Component {
  componentDidMount() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart() {
    const today = new Date();
    console.log(today.getMonth());
    const datums = [['Week', 'Distance', 'Duration', 'Elevation']];
    let workouts = this.props.workout.filter(el => {
      el.user_id === this.props.currentUser.id;
    });
    // workouts.sort
    this.props.workout.forEach(el => {
      console.log(
        el.date.split('-').map((el, i) => {
          if (i === 2) {
            el = el.split('T')[0];
          }
          return el;
        })
      );
    });
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540],
    ]);

    var options = {
      title: 'Your Recent Workouts',
      curveType: 'function',
      legend: { position: 'bottom' },
    };

    var chart = new google.visualization.LineChart(
      document.getElementById('curve_chart')
    );

    chart.draw(data, options);
  }

  render() {
    let countw = 0;
    let countp = 0;
    this.props.workout.forEach(el => {
      if (el.user_id === this.props.currentUser.id) {
        countw += 1;
      }
    });
    this.props.post.forEach(el => {
      if (el.user_id === this.props.currentUser.id) {
        countp += 1;
      }
    });
    return (
      <div id="current-user-dashboard">
        <Link to={`/users/${this.props.currentUser.id}`}>
          <div id="current-prof-pic-div">
            <img
              src={`${this.props.currentUser.profile_pic}`}
              height="70"
              width="70"
              id="current-prof-pic-dashboard"
            />
          </div>
        </Link>

        <h3>
          <Link to={`/users/${this.props.currentUser.id}`}>
            {this.props.currentUser.firstname} {this.props.currentUser.lastname}
          </Link>
        </h3>
        <div id="stats-div">
          <div>
            <h4>
              <strong>Your workouts:</strong>
            </h4>
            <h4>{countw}</h4>
          </div>
          <div>
            <h4>
              <strong>Your posts:</strong>
            </h4>
            <h4>{countp}</h4>
          </div>
        </div>
        <div id="curve_chart" />
      </div>
    );
  }
}

export default withRouter(CurrentUserProfile);
