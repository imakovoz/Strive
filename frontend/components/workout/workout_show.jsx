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

class WorkoutShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.userId, this.props.workoutId).then(() => this.props.fetchUser(this.props.userId));
  }

  render() {
    let editbtn = null;
    if (this.props.current_user.id == this.props.userId) {
      editbtn = (
        <span id="show-prof-right">
          <Link
            to={`/users/${this.props.userId}/workouts/${this.props.workoutId}/edit`}
            id="workout-show-edit-btn">
            <img src={`${window.edit}`} id="show-edit" height="35"
              width="35" />
          </Link>
        </span>);
      } else {
        editbtn = <div></div>;
      }

      return (
        <div >
          <Header />

          <div id="createWorkoutShowDiv">
            <div id="workout-show-action-btns">
              <div><img src={`${window.edit}`} height="20" width="20" /></div>
              <div><img src={`${window.wrench}`} height="20" width="20" /></div>
            </div>
            <div id="workout-show-wrapper">
              <div id="workout-show-title">
                {this.props.user.firstname + " " + this.props.user.lastname + " - " + this.props.workout.activity}
              </div>
              <div id="workout-show-details-wrapper">
                <div className="workout-show-details-container">
                  <Link to={`/users/${this.props.userId}`}>
                    <img src={`${this.props.user.profile_pic}`}
                      height="100" width="100" />
                  </Link>
                  <div>
                    <span>{this.props.workout.created_at}</span>
                    <h3>{this.props.workout.title}</h3>
                    <p>{this.props.workout.body}</p>
                  </div>
                </div>
                <div className="workout-show-details-container">
                  <div id="workout-show-details-div">
                    <div>
                      <h5>{this.props.workout.distance + " " + this.props.workout.distance_uom}</h5>
                      <label>Distance</label>
                    </div>
                    <div>
                      <h5>{this.props.workout.duration}</h5>
                      <label>Duration</label>
                    </div>
                    <div>
                      <h5>{this.props.workout.distance + "/" + this.props.workout.distance_uom}</h5>
                      <label>Pace</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      );

  }
}

export default withRouter(WorkoutShow);
