
import React, { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  const login = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "testuser", password: "password123" })
    });
    const data = await response.json();
    setToken(data.access_token);
  };

  return (
    <div>
      <h1>Login Authentication System</h1>
      {token ? <p>Logged in with token: {token}</p> : <button onClick={login}>Login</button>}
    </div>
  );
}

export default App;
