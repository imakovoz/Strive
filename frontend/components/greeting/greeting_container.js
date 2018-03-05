import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({current_user: state.session.currentUser});
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
