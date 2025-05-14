import React, { useEffect, useState } from "react";
import API from "../services/api"; // Corrected the import path

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/api/example") // This will call http://localhost:5146/api/example
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
