import { searchUsers } from '../../actions/user_actions';
import Search from './search';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  searchUsers: () => dispatch(searchUsers()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
