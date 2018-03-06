import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'login'
  });
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
