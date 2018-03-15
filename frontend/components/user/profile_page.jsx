import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../header/header_container';
import UpdateProfileModal from './update_profile_modal';


class ProfilePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggle: "number",
      imageUrl: "",
      imageFile: null,
      isOpen: false,
    };

    this.chart = null;
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
    if (file) formData.append("user[profile_pic]", file);
    this.props.updateUser(formData, this.props.current_user.id);
  }

  toggleModal() {
    this.setState({isOpen: !(this.state.isOpen)});
  }

  render() {
    if (this.props.user_profile) {
      return (
        <div>
          <UpdateProfileModal isOpen={this.state.isOpen} onClose={this.toggleModal}/>
          <Header />
          <div id="current-user-profile-wrapper">
            <div id="current-user-profile">
              <div>
                <span onClick={this.toggleModal}>⚙</span>
                <img
                  src={`${this.props.user_profile.profile_pic}`}
                  height="150"
                  width="150"
                  />
              </div>
              <h3>{this.props.user_profile.firstname} {this.props.user_profile.lastname}</h3>
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
