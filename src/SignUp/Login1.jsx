import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

function Login() {
  // email
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // password
  const [password, setPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // email validation
  const validateEmail = () => {
    const regex = /^[a-zA-Z0-9+!#$%^&*()_]+@[a-zA-Z0-9_]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setEmailError("Enter a valid Email Address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  // password validation
  const validatePassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,10}$/;
    if (!regex.test(password)) {
      setPasswordError(
        "The password is not Strong.\n- Must be 8-10 characters\n- Include small & capital letter\n- Include a digit\n- Include a special symbol"
      );
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = validateEmail();
    const validPassword = validatePassword();

    if (validEmail && validPassword) {
      setUserEmail(email);
      setUserPassword(password);
    }
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <h1 className="register-title">Login</h1>
        <p className="register-subtitle">Welcome back! Please log in.</p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="email">
              Email:<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              required
            />
            {emailError && <p style={{ color: "red", fontSize: "14px" }}>{emailError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password:<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              required
            />
            {passwordError && (
              <p style={{ color: "red", fontSize: "14px", whiteSpace: "pre-line" }}>
                {passwordError}
              </p>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
          <p>Do not Have an Account?Please {" "}
            <Link to='/signup'>Register</Link>
          </p>
          <p>
            <Link to='/forgotpassword'>Forgot Password</Link>
          </p>
        </form>

        {(userEmail || userPassword) && (
          <p className="welcome-msg">
            ✅ Hello {userEmail}, you are logged in!
          </p>
        )}
      </div>
    </section>
  );
}

export default Login;
