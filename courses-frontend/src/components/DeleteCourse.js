import React, { useState } from 'react';
import axios from 'axios';
import '../styles/DeleteCourse.css';

function DeleteCourse() {
  const [courseId, setCourseId] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/courses/${courseId}/`)
      .then(() => {
        setCourseId('');
        alert('Course deleted successfully!');
      })
      .catch(error => console.error('Error deleting course:', error));
  };

  return (
    <div className="delete-course">
      <h2>Delete a Course</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Course ID"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        />
        <button type="submit">Delete Course</button>
      </form>
    </div>
  );
}

export default DeleteCourse;
