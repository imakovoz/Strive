import { updatePost, fetchPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {

  return ({
    current_user: state.session.currentUser,
    post: state.entities.posts[ownProps.match.params.post_id] || {},
    postId: ownProps.match.params.post_id,
    type: "update",
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    action: (userId, post) => dispatch(updatePost(userId, post)),
    fetchPost: (userId, postId) => dispatch(fetchPost(userId, postId)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
