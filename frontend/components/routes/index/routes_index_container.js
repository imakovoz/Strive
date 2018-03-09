import RouteIndex from './routes_index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    users: state.entities.users,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
