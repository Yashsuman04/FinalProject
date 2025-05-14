import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";

const InstructorDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/");
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!user) return null;

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Instructor Dashboard</h2>
        <p>Welcome, {user.fullName}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </>
  );
};

export default InstructorDashboard;
