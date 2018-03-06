import { login } from '../../actions/session_actions';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createPost: (post) => dispatch(createPost(post)),

  });
};


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
