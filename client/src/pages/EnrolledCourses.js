import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";

const EnrolledCourses = () => {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("enrolledCourses");
    if (data) {
      setEnrolled(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>My Enrolled Courses</h2>
        {enrolled.length === 0 && <p>No enrolled courses yet.</p>}
        {enrolled.map((course, index) => (
          <div key={course.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <p>Progress: {Math.floor(Math.random() * 100)}%</p>{" "}
              {/* simulate progress */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EnrolledCourses;
