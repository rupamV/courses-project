import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ListInstances.css';


const ListInstances = ({ instances }) => {
  return (
      <div className="instance-list">
          <h3>List of Course Instances</h3>
          <table>
              <thead>
                  <tr>
                      <th>Course Title</th>
                      <th>Year-Sem</th>
                      <th>Code</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {instances.map((instance) => (
                      <tr key={`${instance.course}-${instance.year}-${instance.semester}`}>
                          <td>{instance.course}</td>
                          <td>{`${instance.year}-${instance.semester}`}</td>
                          <td>{instance.course}</td>
                          <td>
                              <button onClick={() => alert(`View details for ${instance.course}`)}>
                                  🔍
                              </button>
                              <button onClick={() => alert(`Delete instance ${instance.course}`)}>
                                  🗑️
                              </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
};

export default ListInstances;