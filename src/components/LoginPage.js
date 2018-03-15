import React from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class LoginPage extends React.Component {
  
  render () {
    return (
      <div className="container-fluid col-8 mt-2">
      <form className="form-signin bg-dark p-5 rounded">
        <h2 className="form-signin-heading text-light text-center">Log<span className="text-primary">in</span></h2>
        <input type="email" id="inputEmail" className="form-control mt-4" placeholder="Email address" required autoFocus />
        <input type="password" id="inputPassword" className="form-control mt-3" placeholder="Password" required/>
        <div className="checkbox mt-2 text-secondary">
            <input type="checkbox" value="remember-me" /> Remember me
        </div>
        <button onClick={this.props.startLogin} className="btn btn-lg btn-block btn-login btn-primary mt-2" type="submit">Sign in</button>
      </form>
    </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
