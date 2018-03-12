import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../header/header_container";

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.workout;

    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount() {
    this.setState({
      date: [
        this.state.date.getYear() + 1900,
        ("0" + (this.state.date.getMonth() + 1)).slice(-2),
        ("0" + this.state.date.getDate()).slice(-2)
      ].join("-")
    });
    if (this.state.time.getHours() < 13) {
      this.setState({
        time:
          this.state.time.getHours() +
          ":" +
          this.state.time.getMinutes() +
          " " +
          "AM"
      });
    } else {
      this.setState({
        time:
          this.state.time.getHours() -
          12 +
          ":" +
          this.state.time.getMinutes() +
          " " +
          "AM"
      });
    }
  }

  handleInput(e) {
    const obj = {};
    obj[e.currentTarget.id.split("-").slice(-1)[0]] = e.target.value;
    this.setState(obj);
  }

  handlePost() {
    const date = [this.state.date, this.state.time].join(" ");
    this.props
      .action(this.props.current_user.id, {
        title: this.state.title,
        body: this.state.body,
        distance: this.state.distance,
        distance_uom: this.state.distance_uom,
        duration:
          parseInt(this.state.hours * 360) +
          parseInt(this.state.minutes * 60) +
          parseInt(this.state.seconds),
        elevation: this.state.elevation,
        elevation_uom: this.state.elevation_uom,
        date: this.state.date,
        activity: this.state.activity
      })
      .then(() => this.props.history.push("/"));
  }

  render() {
    const distUom = ["miles", "kilometers", "meters", "yards"];
    const distUomDrop = (
      <select id="workout-form-input-distance_uom" onChange={this.handleInput}>
        {distUom.map((el, i) => {
          if (el === this.state.distance_uom) {
            return (
              <option value={el} selected="selected" key={i}>
                {el}
              </option>
            );
          } else {
            return (
              <option value={el} key={i}>
                {el}
              </option>
            );
          }
        })}
      </select>
    );
    const elevationUom = ["feet", "meters"];
    const elevationUomDrop = (
      <select id="workout-form-input-elevation_uom" onChange={this.handleInput}>
        {elevationUom.map((el, i) => {
          if (el === this.state.elevation_uom) {
            return (
              <option value={el} selected="selected" key={i}>
                {el}
              </option>
            );
          } else {
            return (
              <option value={el} key={i}>
                {el}
              </option>
            );
          }
        })}
      </select>
    );
    const activities = ["Run", "Ride", "Swim"];
    const activityDrop = (
      <select id="workout-form-input-activity" onChange={this.handleInput}>
        {activities.map((el, i) => {
          if (el === this.state.activity) {
            return (
              <option value={el} selected="selected" key={i}>
                {el}
              </option>
            );
          } else {
            return (
              <option value={el} key={i}>
                {el}
              </option>
            );
          }
        })}
      </select>
    );

    const ampm = ["AM", "PM"];
    const hrs = [
      "12",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11"
    ];
    const times = [];
    const dayTimes = ampm.forEach((m, x) => {
      for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 60; j += 15) {
          let time = hrs[i] + ":" + ("0" + j).slice(-2) + " " + m;
          times.push(<option value={time}>{time}</option>);
        }
      }
    });

    return (
      <div>
        <Header />
        <div id="workoutform-container">
          <div id="workoutform-sidebar" />
          <div id="CreateWorkoutFormDiv">
            <h3 id="manual-entry-header">Manual Entry</h3>

            <form id="CreateWorkoutForm">
              <div className="workout-form-divs" id="workout-form-first-div">
                <div className="workout-form-input-label-divs">
                  <label>Distance</label>
                  <div>
                    <input
                      className="workout-form-inputs"
                      type="text"
                      value={this.state.distance}
                      onChange={this.handleInput}
                      id="workout-form-input-distance"
                    />
                    {distUomDrop}
                  </div>
                </div>

                <div className="workout-form-input-label-divs">
                  <label>Duration</label>
                  <div>
                    <input
                      className="workout-form-inputs"
                      type="text"
                      value={this.state.hours}
                      onChange={this.handleInput}
                      placeholder="1"
                      id="workout-form-input-hours"
                    />
                    <input
                      className="workout-form-inputs"
                      type="text"
                      value={this.state.minutes}
                      onChange={this.handleInput}
                      placeholder="00"
                      id="workout-form-input-minutes"
                    />
                    <input
                      className="workout-form-inputs"
                      type="text"
                      value={this.state.seconds}
                      onChange={this.handleInput}
                      placeholder="00"
                      id="workout-form-input-seconds"
                    />
                  </div>
                </div>

                <div className="workout-form-input-label-divs">
                  <label>Elevation</label>
                  <div>
                    <input
                      className="workout-form-inputs"
                      type="text"
                      value={this.state.elevation}
                      onChange={this.handleInput}
                      id="workout-form-input-elevation"
                    />
                    {elevationUomDrop}
                  </div>
                </div>
              </div>

              <hr />

              <div className="workout-form-divs" id="workout-form-second-div">
                <div>
                  <div className="workout-form-input-label-divs">
                    <label>Sport</label>
                    {activityDrop}
                  </div>

                  <div className="workout-form-input-label-divs">
                    <label>Date & Time</label>
                    <div id="date-time-workout">
                      <input
                        type="date"
                        defaultValue={this.state.date}
                        onChange={this.handleInput}
                        id="workout-form-input-date"
                      />

                      <input
                        type="text"
                        list="times"
                        onChange={this.handleInput}
                        id="workout-form-input-time"
                        defaultValue={this.state.time}
                      />
                      <datalist id="times">{times.map(el => el)}</datalist>
                    </div>
                  </div>
                </div>
                <div className="workout-form-input-label-divs">
                  <label>Title</label>
                  <input
                    className="workout-form-inputs"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.title}
                    id="workout-form-input-title"
                  />
                </div>
              </div>

              <hr />

              <div className="workout-form-divs" id="workout-form-third-div">
                <textarea
                  className="workout-form-inputs"
                  type="text"
                  value={this.state.body}
                  onChange={this.handleInput}
                  placeholder="How did it go? Were you tired or rested? How was the weather?"
                  id="workout-form-input-body"
                />
              </div>
            </form>

            <hr />
            <div id="workout-submission">
              <a
                onClick={this.handlePost.bind(this)}
                className="workout-form-inputs-btn"
                id="create-workout-submit"
              >
                Publish
              </a>

              <span>
                <Link
                  to={`/profile/${this.props.current_user.id}`}
                  className="workout-form-inputs-btn"
                  id="discard-workout-submit"
                >
                  Cancel
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(WorkoutForm);
