import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
          type="text" 
          name="username" 
          value={username}  // Holds username state
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </label>

      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={email}  // Holds email state
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </label>

      <label>
        Password:
        <input 
          type="password" 
          name="password" 
          value={password}  // Holds password state
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
