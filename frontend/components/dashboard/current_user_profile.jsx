import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CurrentUserProfile extends React.Component {
  componentDidMount() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart() {
    const today = (new Date().getYear() + 1900) * 12 + new Date().getMonth();
    console.log(today);

    var month = new Array();
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    const datums = [
      ['Week', 'Distance (m)'],
      [month[(today - 3) % 12], 0],
      [month[(today - 2) % 12], 0],
      [month[(today - 1) % 12], 0],
      [month[today % 12], 0],
    ];
    console.log(datums);
    let workouts = this.props.workout.filter(el => {
      el.user_id === this.props.currentUser.id;
    });
    // workouts.sort
    this.props.workout.forEach(el => {
      let count = 0;
      el.date.split('-').forEach((el, i) => {
        if (i === 0) {
          count += el * 12;
        } else if (i === 1) {
          count += el - 1;
        }
      });
      if (count + 4 > today) {
        console.log(datums[4 - (today - count)]);
        datums[4 - (today - count)][1] += el.distance;
        // datums[4 - (today - count)][2] += el.duration;
        // datums[4 - (today - count)][3] += el.elevation;
      }
    });
    var data = google.visualization.arrayToDataTable(datums);

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
