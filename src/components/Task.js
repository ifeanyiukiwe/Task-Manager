// import React from 'react';

// function Task({ task, updateTask, deleteTask }) {
//   return (
//     <li>
//       <h3>{task.title}</h3>
//       <p>Category: {task.category}</p>
//       <p>Due Date: {task.dueDate}</p>
//       <p>Priority: {task.priority}</p>
//       <button onClick={() => deleteTask(task.id)}>Delete</button>
//       {/* Add Edit Functionality Here */}
//     </li>
//   );
// }

// export default Task;

import React, { useState } from 'react';

function Task({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  const handleUpdate = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={editedTask.category}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleChange}
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>Category: {task.category}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Task;
