import React from 'react'
import ReactDOM from 'react-dom'

console.log("lksdjhfkdhkjdhgkj")

let loggedStatus = false;

const log = (loggedStatus) => {
  loggedStatus = !loggedStatus;
  console.log(loggedStatus)
  ReactDOM.render(<AuthInfo isAuthenticated={loggedStatus} info="This is the super important not info"/>, document.getElementById("app"));
}

const Info = (props) => {
  let buttonMessage;

  if (props.isAuthenticated) {
    buttonMessage = "Logout!!"
  } else {
    buttonMessage = "Login!!"   
  }

  return (
    <div className="container bg-primary">
      <h1 className="lead">Info</h1>
      <p className="lead">This info is: {props.info}</p>
      <button className="btn btn-danger" onClick={e => log(props.isAuthenticated)}>{buttonMessage}</button>      
    </div>
  );
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <div className="container bg-success">
          {props.isAuthenticated && <p className = "lead my-0 lead">User is Logged In</p>}
        </div>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is the super important info"/>, document.getElementById("app"));