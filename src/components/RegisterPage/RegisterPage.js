import React, { Component } from "react";

const RegisterPage = props => {
  return (
    <div>
      <div className="register-box">
        <div className="register-logo">
          <a ><b>CCM</b>Application</a>
        </div>

        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>

            <div className="form-group has-feedback">
              <input type="text" className="form-control" placeholder="Full name" />
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Retype password" />
              <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox" /> I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
              </div>
            </div>
          <a href="login.html" className="text-center">I already have a membership</a>
        </div>
      </div>

    </div>
  )
};

export default RegisterPage;
