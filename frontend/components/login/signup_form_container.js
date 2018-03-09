import { signup, resetErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'signup'
  });
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  resetErrors: () => dispatch(resetErrors()),
  login: (user) => dispatch(login(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
