import React, { useContext, useState } from "react";
import { Store } from "../AppState/Store";
import Card from "../util/card";
import "../components/createacc.css"; 
export default function CreateAccountComponent() { 
  const [show, setShow] = useState(true);
  const { state, actions } = useContext(Store);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const phoneNumber = userData.phoneNumber;
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone number must contain exactly 10 digits.");
      return;
    }

    // Check if email already exists
    const emailExists = state.users.some(user => user.email === userData.email);
    if (emailExists) {
      alert(`!!This email is already associated with an account.
      *Please use another email.`);
      return;
    }
    // Add user with default balance and empty transaction history
    actions.addUser({ ...userData, balance: 0, transactions: [] });
    alert("Success!");
    setShow(false);
  };
  const handleReset = () => {
    setShow(true);
  };
  return (
    <>
    <div className="createbg-container">
      <br />
      <hr className="solid" />
      <h3>CREATE ACCOUNT</h3>
      <Card
        header="Create New Account"
        bgcolor="secondary"
        body={
          show ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="email">Email Address</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  minLength="8"
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <br />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-light"
                id="submitBtn"
              >
                Create Account
              </button>
            </form>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="button"
                className="btn btn-light"
                onClick={handleReset}
              >
                Add Another Account
              </button>
            </>
          )
        }
      />
      <br />
      </div>
    </>
  );
}
