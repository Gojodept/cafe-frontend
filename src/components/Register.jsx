//import "./Register.css";
// import { useRef } from "react";
import { useState } from "react";
import "./Register.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const Navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL
  const handleSubmit = async () => {
    try {
      setError("Registering...");
      const url = `${API_URL}/api/users/register`;
      const result = await axios.post(url, user);
      setError("Registration successful!");
      Navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      if (err.code === "ERR_NETWORK") {
        setError("Unable to connect to the server. Please check your internet connection or try again later.");
      } else if (err.response) {
        // The server responded with a status code outside the 2xx range
        setError(err.response.data.message || "Registration failed. Please try again.");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response from server. Please try again later.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };
  return (
<div className="register-container">
  <div className="register-box">
    <h2>Registration Form</h2>
    {error && <p className="register-error">{error}</p>}
    <form className="register-form">
      <input
        type="text"
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        placeholder="Enter First Name"
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        placeholder="Enter Last Name"
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter Email Address"
      />
      <input
        type="tel"
        onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
        placeholder="Enter Phone Number"
      />
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter Password"
      />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
    <hr />
    <Link to="/login">Already a member? Login Here...</Link>
  </div>
</div>
  );
}

// export default function Register() {
//   const firstName = useRef();
//   const lastName = useRef();
//   const email = useRef();
//   const password = useRef();
//   const handleSubmit = () => {
//     const user = {
//       firstName: firstName.current.value,
//       lastName: lastName.current.value,
//       email: email.current.value,
//       password: password.current.value,
//     };
//     console.log(user);
//   };
//   return (
//     <div className="App-Register-Row">
//       <div style={{ backgroundColor: "white" }}>
//         <h2>Registration Form</h2>
//         <p>
//           <input type="text" placeholder="Enter First Name" ref={firstName} />
//         </p>
//         <p>
//           <input type="text" placeholder="Enter Last Name" ref={lastName} />
//         </p>
//         <p>
//           <input type="text" placeholder="Enter Email Address" ref={email} />
//         </p>
//         <p>
//           <input type="password" placeholder="Enter Password" ref={password} />
//         </p>
//         <p>
//           <button onClick={handleSubmit}>Submit</button>
//         </p>
//       </div>
//     </div>
//   );
// }