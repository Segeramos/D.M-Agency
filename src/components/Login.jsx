import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      const data = await res.json();
      if (data.jwt) {
        localStorage.setItem("strapi_jwt", data.jwt);
        navigate("/dashboard");
      } else {
        setMessage("❌ Invalid email or password.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Login failed.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md bg-orange-50 rounded-lg shadow-lg p-8 text-black">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {message && (
          <div className="mb-4 text-center text-red-600 text-sm">{message}</div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full bg-orange-600 text-black font-semibold py-2 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-500"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
