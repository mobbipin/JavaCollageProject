import "../assets/css/signup.css";
import { _axios } from "../config";

import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullname = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { fullname, email, password };
    const res = await _axios.post("user/saveuser", user);
    if (res.data) {
      alert("User created successfully");
      window.location.href = "/login";
    } else {
      alert("User creation failed");
    }
  };
  return (
    <div>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="signup-input-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="FullName" required />
          </div>
          <div className="signup-input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="signup-input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
          <div className="signup-form-group">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
