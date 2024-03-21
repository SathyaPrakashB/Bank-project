import React from "react";
import "../components/home.css";

//import backgroundImage from "./homeimg.png";

export default function Home() {
  return (
    <>
    <div class="loader"></div>
      <div className="content-container">
        <div className="welcome-home-container">
          <header className="header">
            <h1>Welcome to Our Banking Platform</h1>
            <p>Start managing your finances with ease</p>
          </header>
          <section className="main-content">
            <div className="features">
              <div className="feature">
                <i className="fas fa-money-bill-wave"></i>
                <h2>Easy Transactions</h2>
                <p>Transfer money, pay bills, and more</p>
              </div>
              <div className="feature">
                <i className="fas fa-chart-line"></i>
                <h2>Track Your Finances</h2>
                <p>Monitor your spending and savings</p>
              </div>
              <div className="feature">
                <i className="fas fa-lock"></i>
                <h2>Secure & Safe</h2>
                <p>Your data is protected with us</p>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="footer-content">
              {/* <div className="contact-info">
                <h3>Contact</h3>
                <p>Phone: +123456789</p>
                <p>Email: info@example.com</p>
                <p>Address: 123 Street, City, Country</p>
              </div> */}
              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="icons">
                  {/* Add social media icons here */}
                </div>
              </div>
              <div className="support-info">
                <h3>Help & Support</h3>
                <p>For assistance, contact our support team.</p>
                <p>Terms & Policies</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      </>
  );
}
