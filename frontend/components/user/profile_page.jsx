import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../header/header_container';


class ProfilePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggle: "number",
      imageUrl: "",
      imageFile: null,
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

  previewFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit() {
    const file = this.state.imageFile;

    const formData = new FormData();
    formData.append("user[firstname]", this.state.current_user.firstname);
    formData.append("user[lastname]", this.state.current_user.lastname);
    formData.append("user[email]", this.state.current_user.email);
    formData.append("user[password_digest]", this.state.current_user.password_digest);
    if (file) formData.append("user[profile_pic]", file);
    this.props.updateUser(formData, this.resetForm);
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
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="file" onChange={this.previewFile.bind(this)}></input>
                <img src={this.state.imageUrl} />
                <button>Submit</button>
              </form>
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
