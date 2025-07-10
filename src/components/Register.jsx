import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [user, setUser] = useState({});
  const [error,setErrror]=useState()
const handleSubmit = async () => {
  console.log(user);

  try {
    //const url = "http://localhost:8080/api/users/register";
    const url ="https://cafe-backend-orc7jz9r2-arindamkahsyap0s-projects.vercel.app/"
    const result = await axios.post(url, user); // ✅ send user object
    setErrror("✅ Registration successful")
  } catch (err) {
    console.error(err);
    setErrror("Something went wrong.");
  }
};

  return (
    <div>
      <h2>Registration form </h2>
      <p>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}
