import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CreateInstance.css';

const CreateInstance = ({ onAddInstance, courses }) => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      if (year && semester && selectedCourse) {
          onAddInstance({ year, semester, course: selectedCourse });
          setYear('');
          setSemester('');
          setSelectedCourse('');
      }
  };

  return (
      <div className="create-instance">
          <h3>Add Instance</h3>
          <form onSubmit={handleSubmit}>
              <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                  <option value="">Select course</option>
                  {courses.map((course) => (
                      <option key={course.code} value={course.code}>
                          {course.title}
                      </option>
                  ))}
              </select>
              <input
                  type="text"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
              />
              <input
                  type="text"
                  placeholder="Semester"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
              />
              <button type="submit">Add instance</button>
          </form>
      </div>
  );
};

export default CreateInstance;