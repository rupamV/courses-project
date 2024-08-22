import React, { useState } from 'react';
import '../styles/CreateCourse.css';

const CreateCourse = ({ onAddCourse }) => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      if (title && code && description) {
          onAddCourse({ title, code, description });
          setTitle('');
          setCode('');
          setDescription('');
      }
  };

  return (
      <div className="create-course">
          <h3>Add Course</h3>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Course title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <input
                  type="text"
                  placeholder="Course code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
              />
              <input
                  type="text"
                  placeholder="Course description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
              />
              <button type="submit">Add course</button>
          </form>
      </div>
  );
};

export default CreateCourse;