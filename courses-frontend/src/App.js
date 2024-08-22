import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import CreateCourse from './components/CreateCourse';
import DeleteCourse from './components/DeleteCourse';
import ListInstances from './components/ListInstances';
import CreateInstance from './components/CreateInstance';
import './styles/App.css';

const App = () => {
    const [courses, setCourses] = useState([]);
    const [instances, setInstances] = useState([]);

    const addCourse = (course) => {
        setCourses([...courses, course]);
    };

    const addInstance = (instance) => {
        setInstances([...instances, instance]);
    };

    const deleteCourse = (code) => {
        setCourses(courses.filter((course) => course.code !== code));
    };

    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create-course">Create Course</Link>
                        </li>
                        <li>
                            <Link to="/create-instance">Create Instance</Link>
                        </li>
                        <li>
                            <Link to="/courses">View Courses</Link>
                        </li>
                        <li>
                            <Link to="/instances">View Instances</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h2>Welcome to the Course Management App</h2>
                                <p>Select an option from the menu to get started.</p>
                            </div>
                        }
                    />
                    <Route
                        path="/create-course"
                        element={<CreateCourse onAddCourse={addCourse} />}
                    />
                    <Route
                        path="/create-instance"
                        element={<CreateInstance onAddInstance={addInstance} courses={courses} />}
                    />
                    <Route
                        path="/courses"
                        element={<CourseList courses={courses} onDeleteCourse={deleteCourse} />}
                    />
                    <Route
                        path="/instances"
                        element={<ListInstances instances={instances} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
