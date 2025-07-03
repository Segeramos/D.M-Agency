import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load the token
  const token = localStorage.getItem("strapi_jwt");

  useEffect(() => {
    // If no token, redirect to login
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch the user profile
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data && data.email) {
          setUser(data);
        } else {
          // Invalid token
          localStorage.removeItem("strapi_jwt");
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        localStorage.removeItem("strapi_jwt");
        navigate("/login");
      }
    };

    fetchUser();
  }, [token, navigate]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={() => {
          localStorage.removeItem("strapi_jwt");
          navigate("/login");
        }}
        className="mt-4 px-4 py-2 bg-orange-600 rounded hover:bg-orange-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
