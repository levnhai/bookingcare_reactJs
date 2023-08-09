import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Tilt from "react-parallax-tilt";

import * as actions from "../../store/actions";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
  }
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-background">
          <div className="login-container">
            <div className="login-wrap">
              <div className="login-pic">
                <Tilt scale={1.2}>
                  <img
                    src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                    alt="Lamp"
                    width="316"
                    height="289"
                  />
                </Tilt>
              </div>
              <div>
                <form className="login-from">
                  <h2 className="login-form-title">Login</h2>
                  <input
                    type="text"
                    className="login-form-input"
                    placeholder="email"
                  />
                  <input
                    type="password"
                    className="login-form-input"
                    placeholder="password"
                  />
                  <button className="login-form-submit" type="submit">
                    Login
                  </button>
                </form>
                <span className="login-form-forgot">
                  Forgot
                  <strong className="login-form-link">
                    <a href="#">UserName/Password</a>
                  </strong>
                </span>
                <div className="login-social">
                  <span className="login-social-title">Or sign in with :</span>
                  <div className="login-icon-group">
                    <a href="#"><i className="fa-brands fa-google login-icon login-icon-google"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f login-icon login-icon-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
