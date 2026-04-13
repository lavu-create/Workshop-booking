import React, { useState } from "react";
import "./App.css";
import chartImg from "./images/chart.png";
import welcome_img from "./images/welcome.png";
import signup_img from "./images/signup.png";
import home_img from "./images/home.png";
import home_pic_img from "./images/home-pic.png";
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell} from "recharts";
import { State } from "country-state-city";

function App() {
  const [page, setPage] = useState("home");
  const [authPage, setAuthPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [chartType, setChartType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const stateData =[{ name: "Punjab", value: 0 },{ name: "Delhi", value: 0 },{ name: "UP", value: 0 },{ name: "Other", value: 0 }];
  const workshopData = [];
  const hasData = workshopData.some(item => item.value > 0);
  const states = State?.getStatesOfCountry ? State.getStatesOfCountry("IN"): [];
  
  const handleLogin = () => {
    if (email && password) {
      setAuthPage("");
      setPage("home");
    } else {
      alert("Enter email and password");
    }
  };
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    workshop: "All",
    state: "All",
    sort: "Latest"
  });
  const [signup, setSignup] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    institute: "",
    department: "Computer Science",
    location: "",
    state: "",
    title: "Prof.",
    hearAbout: "FOSSEE website",
    password: "",
    other: "",
    confirmPassword: ""
  });

  return (
    <>{/* Navbar */}
      <nav className="navbar">
        <h3>Workshop Portal</h3>
        <div>
            <span className="nav-link" onClick={() => {setPage("home");setAuthPage("");}}>Home</span>
            <span className="nav-link" onClick={() => {setPage("workshops");setAuthPage("");}}>Workshops</span>
            <span className="nav-link" onClick={() => {setPage("stats");setAuthPage("");}}>Statistics</span>
            <span className="nav-link" onClick={() => { setAuthPage("login"); setPage("");}}>Login</span>
            <span className="nav-link" onClick={() => {setAuthPage("");setPage("home");}}>Logout</span>
        </div>
      </nav>

      <div className="container">
          {/* LOGIN + SIGNUP */}
            {authPage === "login" && (
              <div className="login-box">
                <div className="welcome-img-div">
                  <img src={welcome_img} alt="Welcome!" />
                </div>
                <div className="login-container">
                  <h2>Welcome to Workshop Portal</h2>
                  <p>Access your account to book workshops</p>
  
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                  <label>Password</label>
                  <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                  <button onClick={handleLogin}>Sign In</button>
 
                  <p className="link">Forgot Password?</p>
                  
                  <p>New here?{" "}
                    <span className="link" onClick={() => setAuthPage("signup")}>
                      Create Account
                    </span>
                  </p>
                </div>
              </div>
            )}

            {authPage === "signup" && (
              <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "90%", maxWidth: "700px", margin: "auto" }}>
                <div className="signup-header">
                <button onClick={() => setAuthPage("login")} style={{cursor:"pointer", marginBottom: "10px",background: "#ccc",color: "black", padding: "5px 10px"}}>
                  ⬅ Back
                </button>
                <div className="signup-head">
                  <h2 style={{margin:"0px 0px 0px 0px",padding:"0px"}}>Create Account</h2>
                </div>
                </div>
                <div className="signup-body"><div className="signup-table">
                <table style={{ width: "100%",border: "2px solid grey",borderCollapse:"collapse", margin:"8px 0px 0px 0px"}}>
                  <tbody>
                    <tr>
                      <td>Title</td>
                      <td>
                        <select value={signup.title} onChange={(e) => setSignup({ ...signup, title: e.target.value })}>
                          <option>Prof.</option>
                          <option>Dr.</option>
                          <option>Mr.</option>
                          <option>Ms.</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>First Name</td>
                      <td><input value={signup.firstName} onChange={(e) => setSignup({ ...signup, firstName: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td><input value={signup.lastName} onChange={(e) => setSignup({ ...signup, lastName: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><input type="email" value={signup.email} onChange={(e) => setSignup({ ...signup, email: e.target.value })} /></td></tr>
                    <tr>
                      <td>Password</td>
                      <td><input type="password" value={signup.password} onChange={(e) => setSignup({ ...signup, password: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Confirm Password</td>
                      <td><input type="password" value={signup.confirmPassword} onChange={(e) => setSignup({ ...signup, confirmPassword: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td><input value={signup.phone} onChange={(e) => setSignup({ ...signup, phone: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Institute</td>
                      <td><input value={signup.institute} onChange={(e) => setSignup({ ...signup, institute: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Department</td>
                      <td>
                        <select value={signup.department} onChange={(e) => setSignup({ ...signup, department: e.target.value })}>
                          <option>Computer Science</option>
                          <option>Electronics</option>
                          <option>Mechanical</option>
                          <option>Civil</option>
                        </select>
                      </td>
                    </tr>
                
                    <tr>
                      <td>Location</td>
                      <td><input value={signup.location} onChange={(e) => setSignup({ ...signup, location: e.target.value })} /></td>
                    </tr>
                    
                    <tr>
                      <td>State</td>
                      <td><input value={signup.state} onChange={(e) => setSignup({ ...signup, state: e.target.value })} /></td>
                    </tr>
                
                    <tr>
                      <td>How did you hear about us?</td>
                      <td>
                        <select value={signup.hearAbout} onChange={(e) => setSignup({ ...signup, hearAbout: e.target.value })}>
                          <option>FOSSEE website</option>
                          <option>Friend</option>
                          <option>Social Media</option>
                          <option>College</option>
                          <option>Google</option>
                          <option>Other</option>
                        </select>
                        {signup.hearAbout === "Other" && (
                          <input placeholder="Please specify" value={signup.other} onChange={(e) => setSignup({ ...signup, other: e.target.value })}/>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div className="signup-right">
                  <img src={signup_img} alt="Join Us!" />
                  <p style={{fontSize:"36px",margin:"0px"}}>Join us and explore workshops !</p>
                  <button onClick={() => setAuthPage("login")} style={{cursor:"pointer", marginTop: "24px", width: "100%", padding: "10px", background: "#667eea", color: "white",}}>
                    Create Account
                  </button>
                </div>
                </div>
              </div>
            )}
          
            {/* HOME PAGE */}
            {authPage !== "login" && authPage !== "signup" && (
              <>
                {page === "home" && (
                  <div id="home-div" className="login-box">
                    <img src={home_img} alt="Greetings!" />
                    <div className="overlay-text">
                      <h2>Welcome !</h2>
                      <p>Discover, learn, and book hands-on workshops in programming, AI, and engineering — all in one place. Explore and book workshops easily
                      </p>
                      <h3>Upskill yourself with real-world learning experiences</h3>
                      <div id="home-pic"><img src={home_pic_img} alt="Lets grow together!"/></div>
                      <div className="home-points">
                      <div>💻 Learn by Doing</div>
                      <div>📊 Track Your Growth</div>
                      <div>🌍 Explore Domains</div>
                      <div>📅 Easy Booking</div>
                      </div>
                    </div>
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
                        <div style={{display: "flex", justifyContent:"space-between", gap: "106px"}}>
                          <h2>Filters</h2>
                          <button className="clear-btn" onClick={() => setFilters({fromDate: "",toDate: "",workshop: "All",state: "All",sort: "Latest"})}>X Clear</button>
                        </div>

                        <label>From Date</label><input type="date" value={filters.fromDate} onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}/>
                        <label>To Date</label><input type="date" value={filters.toDate} onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}/>

                        <label>Workshop</label>
                        <select value={filters.workshop} onChange={(e) =>setFilters({ ...filters, workshop: e.target.value })}>
                          <option value="All">All</option>
                          <option value="Python">Python</option>
                          <option value="ML">Machine Learning</option>
                        </select>
                        
                        <label>State</label>
                        <select value={filters.state} onChange={(e) =>setFilters({ ...filters, state: e.target.value })}>
                          <option value="All">All States</option>
                          {states?.map((s) => (<option key={s.isoCode} value={s.name}>{s.name}</option>))}
                        </select>

                        <label>Sort By</label>
                        <select value={filters.sort} onChange={(e) =>setFilters({ ...filters, sort: e.target.value })}>
                          <option value="Latest">Latest</option>
                          <option value="Oldest">Oldest</option>
                        </select>

                        <div style={{display: "flex", gap: "10px"}}>
                          <button className="filter-btn">View</button>
                          <button className="filter-btn">Download</button>
                        </div>
                      </div>
                      <div className="chart-btn-container">
                        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                          <button className="toggle-btn-floating" onClick={() => setShowFilters(!showFilters)}>
                            {showFilters ? "Hide Filters" : "Show Filters"}
                          </button>
                        </div>
                        <div className="chart">
                            <img src={chartImg} alt="state-chart" />
                        </div>
                        <div>
                          <button className="btn" onClick={() => {setChartType("state");setShowModal(true);}}>
                            State Chart
                          </button>
                        </div>
                        <div>
                          <button className="btn" onClick={() => {setChartType("workshop");setShowModal(true);}}>
                            Workshop Chart
                          </button>
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
                            <td colSpan="6" style={{ textAlign: "center", padding: "20px", color: "grey"}}>No workshop data available</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}
      </div>
    
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
    </>
  );
}

export default App;