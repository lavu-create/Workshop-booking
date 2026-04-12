import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h3>Workshop Portal</h3>
        <div>
          <span className="nav-link" onClick={() => setPage("home")}>Home</span>
          <span className="nav-link" onClick={() => setPage("workshops")}>Workshops</span>
          <span className="nav-link" onClick={() => setPage("stats")}>Statistics</span>
          <span className="nav-link" onClick={() => setPage("login")}>Login</span>
        </div>
      </nav>

      <div className="container">

        {/* LOGIN PAGE */}
        {page === "login" && (
          <div className="login-box">
            <h2>Welcome to Workshop Portal</h2>

            {isLogin ? (
              <>
                <p>Access your account to book workshops</p>

                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button>Sign In</button>

                <p className="link">Forgot Password?</p>

                <p>
                  New here?{" "}
                  <span className="link" onClick={() => setIsLogin(false)}>
                    Create Account
                  </span>
                </p>
              </>
            ) : (
              <>
                <p>Join us and explore workshops</p>

                <label>Name</label>
                <input type="text" placeholder="Enter your name" />

                <label>Email</label>
                <input type="text" placeholder="Enter your email" />

                <label>Password</label>
                <input type="password" placeholder="Enter your password" />

                <button>Create Account</button>

                <p>
                  Already have an account?{" "}
                  <span className="link" onClick={() => setIsLogin(true)}>
                    Login
                  </span>
                </p>
              </>
            )}
          </div>
        )}

        {/* HOME PAGE */}
        {page === "home" && (
          <div className="login-box">
            <h2>Welcome</h2>
            <p>Explore and book workshops easily</p>
          </div>
        )}

        {/* WORKSHOP PAGE */}
        {page === "workshops" && (
          <div className="workshop-container">
            <h2>Available Workshops</h2>

            <div className="workshop-card">
              <h3>Python Basics</h3>
              <p>Learn fundamentals of Python programming</p>
              <button>Book Now</button>
            </div>

            <div className="workshop-card">
              <h3>Machine Learning</h3>
              <p>Introduction to ML concepts</p>
              <button>Book Now</button>
            </div>
          </div>
        )}

        {/* STATISTICS PAGE */}
        {page === "stats" && (
          <div className="stats-container">

            <div className="filters">
              <h3>Filters</h3>
              <label>From Date</label><input type="date" />
              <label>To Date</label><input type="date" />

              <label>Workshop</label>
              <select>
                <option>All</option>
                <option>Python</option>
              </select>

              <label>State</label>
              <select>
                  <option>All</option>
                  <option>Delhi</option>
              </select>

              <label>Sort By</label>
              <select>
                <option>Latest</option>
                <option>Oldest</option>
              </select>

              <div style={{ display: "flex", gap: "10px" }}>
                <button>View</button>
                <button>Download</button>
              </div>
            </div>
            
            <div className="table-section">
              <h2>Workshop Statistics</h2>
              
              <table>
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Coordinator</th>
                    <th>Institute</th>
                    <th>Instructor</th>
                    <th>Workshop</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center", padding: "20px", color: "grey"}}>
                      No workshop data available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </>
  );
}

export default App;