import React from 'react';
import './form.css'; // Make sure to import your CSS file

const AuthForm: React.FC = () => {
  return (
    <div className="container">
      <div className="forms">
        {/* Login Form */}
        <div className="form login">
          <span className="title">Login</span>
          <form action="" name="loginForm">
            <div className="input-field">
              <input type="text" name="email" placeholder="Enter your email" />
              <i className="fa-solid fa-envelope icon"></i>
            </div>
            <div className="input-field">
              <input type="password" name="password" placeholder="Enter your password" />
              <i className="fa-solid fa-lock icon"></i>
              <i className="fa-solid fa-eye-slash showhidepw"></i>
            </div>
            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="logcheck" />
                <label htmlFor="logcheck" className="text">Remember me</label>
              </div>
              <a href="#" className="text">Forget Password</a>
            </div>
            <div className="input-field button">
              <input type="submit" value="Login" />
            </div>
          </form>
          <div className="login-signup">
            <span className="text">Not a member</span>
            <a href="#" className="text signup-link">Sign up</a>
          </div>
        </div>

        {/* Registration Form */}
        <div className="form signup">
          <span className="title">Registration</span>
          <form name="signUpform">
            <div className="input-field">
              <input type="text" name="name" placeholder="Enter your name" />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="input-field">
              <input type="text" name="email" placeholder="Enter your email" />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="input-field">
              <input type="password" name="password" placeholder="Create your password" className="password" />
              <i className="fa-solid fa-lock"></i>
              <i className="fa-solid fa-eye-slash showhidepw"></i>
            </div>
            <div className="input-field">
              <input type="password" name="confirmpwd" className="password" placeholder="Confirm your password" />
              <i className="fa-solid fa-lock"></i>
              <i className="fa-solid fa-eye-slash showhidepw"></i>
            </div>
            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="termCon" />
                <label htmlFor="termCon" className="text">I accept all terms and conditions</label>
              </div>
              <div className="input-field button">
                <input type="submit" value="signup" />
              </div>
            </div>
          </form>
          <div className="login-signup">
            <span className="text">Already a member?
              <a href="#" className="text login-link">Login Now</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
