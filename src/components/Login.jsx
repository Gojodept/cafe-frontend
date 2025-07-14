import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({});
  const [error, setErrror] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async () => {
    console.log(user);
    try {
      //const url = "http://localhost:8080/api/users/login";
      const url = `${API_URL}/api/users/login`;
      const result = await axios.post(url, user); // ✅ send user object
      
      setErrror("✅ Login Success");
      
    } catch (err) {
      console.error(err);
      setErrror("Something went wrong.");
    }
  };

  return (
    <div>
      <h2>Login form </h2>
      <p>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      {error && <p>{error}</p>}
      <Link to="/admin">Users</Link>
      <Link to="/register"> Register</Link>
    </div>
  );
}
