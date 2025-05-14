import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!user) return null;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        EduSync
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {user.role === "Student" && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/student/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student/enrolled">
                  My Enrollments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student/results">
                  Results
                </Link>
              </li>
            </>
          )}

          {user.role === "Faculty" || user.role === "Instructor" ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/instructor/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/instructor/upload-course">
                  Upload Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/instructor/manage-tests">
                  Manage Tests
                </Link>
              </li>
            </>
          ) : null}
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item text-white px-3 pt-2">{user.fullName}</li>
          <li className="nav-item">
            <button className="btn btn-danger ms-3" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
