//Login.js
import { useState, useContext } from "react";
import { Store } from "../AppState/Store";
import Card from "../util/card";
import Error from "../util/error";
import "../components/login.css"

export default function Login() {
  const { state, actions } = useContext(Store);
  const [formData, setFormData] = useState({
    admin: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State variable to toggle password visibility

  const validateForm = () => {
    const errors = {};
    if (!formData.admin || !formData.password) {
      errors.general = "Both username and password are required";
    } else if (formData.admin !== "admin" || formData.password !== "ADMIN") {
      errors.general = "Not authorized";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      actions.logIn({ email: formData.admin, password: formData.password });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors.general) {
      setErrors({
        ...errors,
        general: null,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <div className="loginbg-container">
      <br />
      <hr className="solid"></hr>
      <h3>{state.currentUser ? "PROFILE" : "LOGIN"}</h3>
      <Card
        bgcolor="secondary"
        header={state.currentUser ? "Profile" : "Login Using Existing Credentials"}
        body={
          !state.currentUser ? (
            <div>
              <form onSubmit={handleSubmit} data-testid="login-form">
                <div className="mb-3">
                  <div>Username</div>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameField"
                    name="admin"
                    onChange={handleChange}
                    value={formData.admin}
                    aria-label="username-field"
                  />
                </div>
                <div className="mb-3">
                  <div>Password</div>
                  <input
                    type={showPassword ? "text" : "password"} // Toggle input type
                    className="form-control"
                    id="passwordField"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    aria-label="password-field"
                  />
                </div>
                {errors.general && <Error id="loginError" message={errors.general} />}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={togglePasswordVisibility} // Toggle password visibility
                >
                  {showPassword ? "Hide Password" : "Show Password"} {/* Button text changes based on visibility */}
                </button>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  id="loginBtn"
                  aria-label="login-button"
                >
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div id="login-message">Login Successful!</div>
              <br /> Hello, {state.currentUser.name}
            </div>
          )
        }
      />
      <br />
      </div>
    </>
  );
}
