import { logout } from '../../actions/session_actions';
import Header from './header';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({current_user: state.session.currentUser});
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
