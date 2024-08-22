import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CourseList.css';


const CourseList = ({ courses, onDeleteCourse }) => {
  return (
      <div className="course-list">
          <h3>List of Courses</h3>
          <table>
              <thead>
                  <tr>
                      <th>Course Title</th>
                      <th>Code</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {courses.map((course) => (
                      <tr key={course.code}>
                          <td>{course.title}</td>
                          <td>{course.code}</td>
                          <td>
                              <button onClick={() => alert(`View details for ${course.title}`)}>
                                  🔍
                              </button>
                              <button onClick={() => onDeleteCourse(course.code)}>🗑️</button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
};

export default CourseList;