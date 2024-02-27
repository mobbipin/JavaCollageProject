import './login.css'; // Make sure the path is correct

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form action="/login" method="post" id="signUp">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        <div className="form-group signup-link">
          Don't have an account? <a href="/user/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
