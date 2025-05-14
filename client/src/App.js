import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import PrivateRoute from "./components/PrivateRoute";
import UploadCourse from "./pages/UploadCourse";
import ViewCourses from "./pages/ViewCourses";
import EnrolledCourses from "./pages/EnrolledCourses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected Routes */}
        <Route
          path="/student/dashboard"
          element={
            <PrivateRoute>
              <StudentDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/instructor/dashboard"
          element={
            <PrivateRoute>
              <InstructorDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/instructor/upload-course"
          element={
            <PrivateRoute>
              <UploadCourse />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/courses"
          element={
            <PrivateRoute>
              <ViewCourses />
            </PrivateRoute>
          }
        />

        <Route
          path="/student/enrolled"
          element={
            <PrivateRoute>
              <EnrolledCourses />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
