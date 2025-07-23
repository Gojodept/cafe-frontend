// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// export default function Login() {
//   const [user, setUser] = useState({});
//   const [error, setErrror] = useState();
//   const API_URL = import.meta.env.VITE_API_URL;
//   const handleSubmit = async () => {
//     console.log(user);
//     try {
//       //const url = "http://localhost:8080/api/users/login";
//       const url = `${API_URL}/api/users/login`;
//       const result = await axios.post(url, user); // ✅ send user object
      
//       setErrror("✅ Login Success");
      
//     } catch (err) {
//       console.error(err);
//       setErrror("Something went wrong.");
//     }
//   };

//   return (
//     <div>
//       <h2>Login form </h2>
//       <p>
//         <input
//           type="text"
//           placeholder="Email"
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//         />
//       </p>
//       <p>
//         <button onClick={handleSubmit}>Submit</button>
//       </p>
//       {error && <p>{error}</p>}
//       <Link to="/admin">Users</Link>
//       <Link to="/register"> Register</Link>
//     </div>
//   );
// }
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import "./Login.css"; // 👈 link your CSS file

export default function Login() {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await axios.post(`${API_URL}/api/users/login`, {
        email,
        password,
      });
      setUser(result.data);
      Navigate("/");
    } catch (err) {
      console.log(err);
      setError("Invalid credentials or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">☕ Login to Aroma Café</h2>
        {error && <div className="error-message">{error}</div>}

        <input
          type="text"
          placeholder="Email Address"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </button>

        <div className="login-footer">
          <Link to="/register" className="login-link">
            Don't have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
}
