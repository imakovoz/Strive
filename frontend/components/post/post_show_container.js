import { login } from '../../actions/session_actions';
import { updatePost, fetchPost } from '../../actions/post_actions';
import PostShow from './post_show';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.currentUser,
    postId: ownProps.match.params.post_id,
    post: state.entities.posts[ownProps.match.params.post_id] || {},
    userId: ownProps.match.params.user_id,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    updatePost: (userId, post) => dispatch(updatePost(userId, post)),
    fetchPost: (userId, post) => dispatch(fetchPost(userId, post))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
