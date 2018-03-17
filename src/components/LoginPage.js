import React from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class LoginPage extends React.Component {
  
  render () {
    return (
      <div className="login-box d-flex align-items-center">
        <div className="login-box__box mx-auto bg-dark pb-3 col-4 rounded">
          <h1 className="login-box__title text-center pb-1 my-3">X<span className="text-light">pensify</span></h1>
          <p className="lead text-center text-secondary">It's time to get your expenses in check.</p>
          <button onClick={this.props.startLogin} className=" mx-auto text-center btn btn-lg btn-block col-8 offset-2 btn-login btn-primary mb-1 mt-4" type="submit">Sign in with <i className="fa fa-google text-danger"> </i> </button>
      </div> 
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
