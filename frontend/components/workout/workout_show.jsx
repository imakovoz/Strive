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
    this.props.fetchWorkout(this.props.userId, this.props.workoutId);
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

          <div id="CreateworkoutShowDiv">

            <div id="create-workout-prof-div">

              <span id="show-prof-left">
                <div id="show-prof-pic">
                  <Link to={`/users/${this.props.current_user.id}`}>
                    <img src="https://tinyurl.com/y8cc7jwt"
                      height="75" width="75" />
                  </Link>
                </div>
                <span id="show-user-info">
                  <Link to={`/users/${this.props.current_user.id}`}>
                    <h4 id="workout-form-user-name">
                      {this.props.current_user.firstname + " " + this.props.current_user.lastname}
                    </h4>
                  </Link>
                  <span id="workouting-as">{formatDate(this.props.workout.created_at)}</span>
                </span>
              </span>
              {editbtn}
            </div>


            <div id="workout-show-content">
              <h2 id="workout-show-title">{this.props.workout.title}</h2>
              <h4>{this.props.workout.body}</h4>
            </div>
          </div>
        </div>
      );

  }
}

export default withRouter(WorkoutShow);
