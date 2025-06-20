import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-white p-6 rounded-lg max-w-xs w-full">
      <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
      <form className="space-y-5" onSubmit={handleRegister}>
        <div>
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}
