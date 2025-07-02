import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null); // { text: "", type: "success" | "error" }
  const [loading, setLoading] = useState(false);

  // Auto-hide messages
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Handle email/password sign up
  const handleSignUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage({ text: "✅ Sign up successful!", type: "success" });
      // Optionally redirect here
    } catch (error) {
      console.error(error);
      let friendlyMessage = "An error occurred.";
      if (error.code === "auth/email-already-in-use") {
        friendlyMessage = "Email already in use.";
      } else if (error.code === "auth/invalid-email") {
        friendlyMessage = "Invalid email address.";
      } else if (error.code === "auth/weak-password") {
        friendlyMessage = "Password should be at least 6 characters.";
      }
      setMessage({ text: friendlyMessage, type: "error" });
    }
    setLoading(false);
  };

  // Handle Google sign in
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setMessage({ text: "✅ Signed in with Google!", type: "success" });
      // Optionally redirect here
    } catch (error) {
      console.error(error);
      setMessage({ text: "Google sign-in failed.", type: "error" });
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 relative">
      {message && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white text-sm transition duration-300 z-50
          ${
            message.type === "success"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="w-full max-w-md bg-orange-100 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Sign Up
        </h2>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`flex items-center justify-center w-full bg-orange-500 text-white font-medium py-2 rounded transition duration-200 mb-4 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-400"
          }`}
        >
          <img
            src="src\assets\images\search.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          {loading ? "Processing..." : "Sign Up with Google"}
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-black" />
          <span className="mx-2 text-black text-sm">or</span>
          <hr className="flex-1 border-black" />
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-black text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Email address"
            />
          </label>

          <label className="block relative">
            <span className="sr-only">Password</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-black text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Password"
            />
            
            <button
            
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-black focus:outline-none"
            >
      
              {showPassword ? "Hide" : "Show"}
            </button>
          </label>

         <button
              onClick={handleSignUp}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold py-2 rounded transition duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-400"
              }`}
            >
              {loading ? (
                "Signing up..."
              ) : (
                <>
                  <img
                    src="src\assets\images\gmail.png"  // Replace with your image path or URL
                    alt="Sign up icon"
                    className="w-5 h-5"
                  />
                  <span>Sign Up with Email</span>
                </>
              )}
         </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
