import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit() {
    this.props
      .createRoute({
        title: this.state.title,
        description: this.state.description,
        polyline: this.props.route.polyline,
        distance: this.props.route.distance,
        elevation_gain: this.props.route.elevation,
        estimated_duration: this.props.route.duration
      })
      .then(() => this.props.history.push("/routes"));
  }

  handleInput(e) {
    const obj = {};
    obj[e.currentTarget.id.split("-").slice(-1)[0]] = e.target.value;
    this.setState(obj);
  }

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div className="save-route-modal-backdrop">
        <div className="save-route-modal">
          <div>
            <div id="route-modal-header">Save</div>
            <div id="route-modal-prompt">
              Enter a name and description for your route below. On the next
              page, you'll be able to see, edit, and share your route.
            </div>
            <form>
              <div>
                <div className="route-modal-inputs-div">
                  <label className="route-modal-labels">
                    Route Name (required)
                  </label>
                  <input
                    type="text"
                    id="route-modal-title"
                    onChange={this.handleInput}
                  />
                </div>
                <div className="route-modal-inputs-div">
                  <label className="route-modal-labels">Description</label>
                  <textarea
                    id="route-modal-description"
                    onChange={this.handleInput}
                  />
                </div>
              </div>
            </form>
            <div className="save-route-modal-footer">
              <button onClick={this.props.onClose}>Cancel</button>
              <button onClick={this.handleSubmit.bind(this)}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default withRouter(Modal);
