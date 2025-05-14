import React, { useState } from "react";
import API from "../services/api";
import Navbar from "../components/NavBar";

const UploadCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mediaUrl: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/course/upload", formData);
      alert("Course uploaded successfully!");
      setFormData({ title: "", description: "", mediaUrl: "" });
    } catch (err) {
      alert("Failed to upload course");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Upload New Course</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            className="form-control mb-3"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Course Description"
            className="form-control mb-3"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mediaUrl"
            placeholder="Media URL (YouTube / Azure Blob)"
            className="form-control mb-3"
            value={formData.mediaUrl}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadCourse;
