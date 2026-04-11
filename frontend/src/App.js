import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

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
          <h2>Welcome</h2>

          {isLogin ? (
            <>
              <p>Sign in to continue</p>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
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
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
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