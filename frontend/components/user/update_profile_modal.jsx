import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      imageFile: null
    };
  }

  previewFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: '', imageFile: null });
    }
  }

  handleSubmit() {
    const file = this.state.imageFile;
    const formData = new FormData();
    if (file) formData.append('user[profile_pic]', file);
    this.props.updateUser(formData, this.props.current_user.id);
    this.props.onClose();
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div className="modal-backdrop">
        <div className="modal" id="user-update-modal">
          <form>
            <input type="file" onChange={this.previewFile.bind(this)} />
            <img src={this.state.imageUrl} id="preview-image-profile" />
            <div>
              <button onClick={this.props.onClose}>Cancel</button>
              <button onClick={this.handleSubmit.bind(this)}>Save</button>
            </div>
          </form>
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
