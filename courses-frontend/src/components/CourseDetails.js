import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/CourseDetails.css';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/courses/${id}/`)
      .then(response => setCourse(response.data))
      .catch(error => console.error('Error fetching course details:', error));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-details">
      <h2>{course.title} ({course.code})</h2>
      <p>{course.description}</p>
      <a href="/">Back to Course List</a>
    </div>
  );
}

export default CourseDetails;
