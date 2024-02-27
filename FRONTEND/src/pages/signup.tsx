import React, { useState } from 'react';
import '../assets/css/signup.css';

const SignupPage = () => {
  const [create, setCreate] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', create);
    // You may want to send a request to your backend with the form data
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form action="/user/saveuser" method="post" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="FullName"
            required
            name="fullname"
            value={create.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            name="email"
            value={create.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            name="password"
            value={create.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <div className="form-group">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
