import React, { useState } from "react";
import "./App.css";
import chartImg from "./images/chart.png";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import { State } from "country-state-city";

function App() {
  const [page, setPage] = useState("home");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [chartType, setChartType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const stateData =[{ name: "Punjab", value: 0 },{ name: "Delhi", value: 0 },{ name: "UP", value: 0 }];
  const workshopData = [];
  const hasData = workshopData.some(item => item.value > 0);
  const states = State.getStatesOfCountry("IN");

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

            <div className="stats-wrapper">
              <div className={`filters ${showFilters ? "" : "hide"}`}>
                <div style={{display: "flex", gap: "44px"}}>
                  <h2>Filters</h2>
                  <button className="clear-btn" onClick={() => alert("Filters cleared")}>X Clear</button>
                </div>
                <label>From Date</label><input type="date" />
                <label>To Date</label><input type="date" />
                <label>Workshop</label>
                <select>
                  <option>All</option>
                  <option>Python</option>
                </select>
                <label>State</label>
                <select>
                  <option>All States</option>
                  {states.map((s) => (
                    <option key={s.isoCode} value={s.name}>{s.name}</option>
                  ))}
                </select>
                <label>Sort By</label>
                <select>
                  <option>Latest</option>
                  <option>Oldest</option>
                </select>
                <div style={{display: "flex", gap: "10px"}}>
                  <button className="filter-btn">View</button>
                  <button className="filter-btn">Download</button>
                </div>
              </div>

              <div style={{ marginBottom: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <button className="toggle-btn-floating" onClick={() => setShowFilters(!showFilters)}>
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </button>

                <div className="chart-btn-container">
                  <div className="chart">
                    <img src={chartImg} alt="state-chart" />
                  </div>
                  <div>
                    <button className="btn" onClick={() => {setChartType("state");
                    setShowModal(true);}}>
                      State Chart
                    </button>
                  <div>
                    <button className="btn" onClick={() => {setChartType("workshop");
                    setShowModal(true);}}>
                      Workshop Chart
                    </button>
                  </div>
                  </div>
                </div>
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

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowModal(false)}>x</button>
              {chartType === "state" && (
                <div>
                  <h2>📊 State Chart</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={stateData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#667eea" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
              {chartType === "workshop" && (
                <div>
                  <h2>📈 Workshop Chart</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={hasData?workshopData:[{ name: "No Data", value: 1 }]} dataKey="value" nameKey="name" outerRadius={100} label>
                        {(hasData ? workshopData : [{ name: "No Data", value: 1 }]).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={hasData ? "#667eea" : "#e5e7eb"}/>
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  {!hasData && (
                    <p style={{textAlign: "center", marginTop: "0px",color: "gray", fontWeight: "bold"}}>
                      No Workshop Data Available
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;