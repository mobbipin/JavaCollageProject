import { _axios } from "../config";

import { Link } from "react-router-dom";

import "../assets/css/login.css";
const Login = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password");
    const user = { email, password };
    const res = await _axios.post("login", user);
    if (res.data) {
      // localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="login-container">
        <h1>Login</h1>
        <form id="signUp" onSubmit={(e) => handleSubmit(e)}>
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="login-form-group">
            <button type="submit">Login</button>
          </div>
          <div className="login-form-group login-signup-link">
            Don&apos;t have an account? <Link to={"/signup"}>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
