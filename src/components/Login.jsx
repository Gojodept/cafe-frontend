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
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";

export default function Login() {
  const { setUser } = useContext(AppContext); // <- just setUser here
  const [form, setForm] = useState({ email: "", password: "" }); // <-- separate form state
  const [error, setError] = useState();
  const Navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/login`;
      const result = await axios.post(url, form); // sending form, not user
      setUser(result.data); // now store logged-in user globally
      localStorage.setItem("token", result.data.token); // optional
      Navigate("/");
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <Link to="/register">Create Account</Link>
    </div>
  );
}
