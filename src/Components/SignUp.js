import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let handlesubmit = (event) => {
    const obj = { name, email, password };
    console.log(obj);
    const url =
      "https://studentdatabase-q1mc.onrender.com/Student/create-student";
    axios
      .post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("Student added successfully");
          console.log(res);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert("Error");
      });
    event.preventDefault();
  };

  return (
    <div>
      {/* {console.log(obj)} */}
      <h1>Student Registration Form</h1>
      <form onSubmit={handlesubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Email"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up </button>
      </form>
      <h2>Already Have an Account?</h2>
      <Link to="/login">Login Page</Link>
      <h4>
        <Link to="/view">View Page</Link>
      </h4>
    </div>
  );
}

export default SignUp;
