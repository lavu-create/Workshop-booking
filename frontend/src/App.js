import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h3>Workshop Portal</h3>
        <div>
          <span className="nav-link">Home</span>
          <span className="nav-link">Workshops</span>
          <span className="nav-link">Contact</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <div className="login-box">
          <h2>Welcome to Workshop Portal</h2>

          {isLogin ? (
            <>
              <p>Sign in to continue</p>
              <label>Email</label>
              <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>

              <label>Password</label>
              <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>

              <button onClick={() => alert("Login functionality")}>
                Sign In
              </button>

              <p
                className="link"
                onClick={() => alert("Forgot password flow")}
              >
                Forgot Password?
              </p>

              <p>
                New here?{" "}
                <span className="link" onClick={() => setIsLogin(false)}>
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <p>Create an account</p>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />

              <label>Email</label>
              <input type="text" placeholder="Enter your email" />

              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              
              <button onClick={() => alert("Signup functionality")}>
                Sign Up
              </button>

              <p>
                Already have an account?{" "}
                <span className="link" onClick={() => setIsLogin(true)}>
                  Login
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;