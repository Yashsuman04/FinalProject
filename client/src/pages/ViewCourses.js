import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/NavBar";

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState(() => {
    const saved = localStorage.getItem("enrolledCourses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    API.get("/api/course/all")
      .then((res) => setCourses(res.data))
      .catch(() => alert("Error loading courses"));
  }, []);

  const handleEnroll = (course) => {
    const alreadyEnrolled = enrolled.some((c) => c.id === course.id);
    if (!alreadyEnrolled) {
      const updated = [...enrolled, course];
      setEnrolled(updated);
      localStorage.setItem("enrolledCourses", JSON.stringify(updated));
      alert(`Enrolled in "${course.title}"`);
    } else {
      alert("Already enrolled!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Available Courses</h2>
        {courses.map((course) => (
          <div key={course.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <button
                className="btn btn-success"
                onClick={() => handleEnroll(course)}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewCourses;
