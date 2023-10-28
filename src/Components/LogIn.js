import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

function LogIn() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let handlesubmit = (event) => {
    const obj = { name, email, password };
    const url = "https://studentdatabase-q1mc.onrender.com/Student/login";
    axios
      .post(url, obj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    event.preventDefault();
  };
  return (
    <div>
      <h1>Student Log In Form</h1>
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
        <button type="submit">Log In </button>
      </form>
    </div>
  );
}

export default LogIn;
