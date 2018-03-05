import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    this.setState({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
    });
  }

  demoLogin(e) {
    const user = {username: 'user'+ Math.floor(e.timeStamp), password: 'starwars', firstname: 'demo', lastname: 'login'};
    this.props.processForm({user});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }
  handleFirstname(e) {
    this.setState({firstname: e.target.value});
  }
  handleLastname(e) {
    this.setState({lastname: e.target.value});
  }
  handleUsername(e) {
    this.setState({username: e.target.value});
  }


  render() {
    if (this.props.formType === 'signup') {
      return (
        <div >
          <header className="LoginPage">
            <h1>STRIVE</h1>

            <div>
              <Link to='/login' id="log-in-link"> Log In </Link>
            <Link to='/signup' id="sign-up-link"> Sign Up </Link>
            </div>
          </header>
          <div id="SessionPageForm">
            <section id="SessionPageHeader">
              Join Strive today, it's Free.
            </section>
            <form onSubmit={ this.handleSubmit } id="SessionForm">
              <input type='text' value={this.state.firstname} onChange={this.handleFirstname} placeholder="First Name" className="SessionFormInputs"></input>
              <input type='text' value={this.state.lastname} onChange={this.handleLastname} placeholder="Last Name" className="SessionFormInputs"></input>
              <input type='text' value={this.state.username} onChange={this.handleUsername} placeholder="Email" className="SessionFormInputs"></input>
              <input type='password' value={this.state.password} onChange={this.handlePassword} placeholder="Password" className="SessionFormInputs"></input>
              <button className="SessionFormInputs" id="sign-up-submit">Submit</button>
              <button onClick={this.demoLogin} className="SessionFormInputs" id="demo-login">Demo Login</button>
            </form>
          </div>
      </div>
      );
    } else {
      return (
        <div >
          <header className="LoginPage">
            <h1>STRIVE</h1>

            <div>
            <Link to='/signup' id="sign-up-link"> Sign Up </Link>
            </div>
          </header>
          <div id="SessionPageForm">
            <section id="SessionPageHeader">
              Log In
            </section>
            <form onSubmit={ this.handleSubmit } id="SessionForm">
              <input type='text' value={this.state.username} onChange={this.handleUsername} placeholder="Email" className="SessionFormInputs"></input>
              <input type='password' value={this.state.password} onChange={this.handlePassword} placeholder="Password" className="SessionFormInputs"></input>
            <button className="SessionFormInputs" id="sign-up-submit">Log In</button>
            </form>
          </div>
      </div>
      );
    }
  }
}

export default withRouter(SessionForm);
