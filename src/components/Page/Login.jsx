import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="p-6   bg-white ">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <form className="space-y-5" onSubmit={handleLogin}>
        <div>
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
