import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './Register.css';

function Fpassword() {
  // password
  const [password, setpassword] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [passworderror, setpassworderror] = useState("");

  // confirm password
  const [cpassword, setcpassword] = useState("");
  const [cpassworderror, setcpassworderror] = useState("");

  // validate password strength
  const validatePassword = () => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,10}$/;
    if (!regex.test(password)) {
      setpassworderror(
        "The password is not Strong.\n- Must be 8-10 characters\n- Include small & capital letter\n- Include a digit\n- Include a special symbol"
      );
      return false;
    } else {
      setpassworderror("");
      return true;
    }
  };

  // confirm password check
  const findcpassworderror = () => {
    if (password !== cpassword) {
      setcpassworderror("The Password and Confirm Password are not matching");
      return false;
    } else {
      setcpassworderror("");
      return true;
    }
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validPassword = validatePassword();
    const validCpassword = findcpassworderror();

    if (validPassword && validCpassword) {
      setuserpassword(password);
    }
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <h1 className="register-title">Forgot Password</h1>
        <p className="register-subtitle">Welcome back! Please reset the password.</p>
        <form onSubmit={handleSubmit} className="register-form">
          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">
              Password:<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setpassword(e.target.value)}
              onBlur={validatePassword}
              required
            />
            {passworderror && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  whiteSpace: "pre-line",
                }}
              >
                {passworderror}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="cpassword">
              Confirm Password<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm your password"
              value={cpassword}
              onChange={(e) => setcpassword(e.target.value)}
              onBlur={findcpassworderror}
              required
            />
            {cpassworderror && (
              <p style={{ color: "red", fontSize: "14px" }}>{cpassworderror}</p>
            )}
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">Submit</button>

          {/* Success message */}
          {userpassword && (
            <p className="welcome-msg">
              ✅ Hello, your password changed successfully!
            </p>
          )}
        </form>
        <p>You can now Login{" "}
         <Link to="/">Login</Link>
         </p>
      </div>
    </section>
  );
}

export default Fpassword;
