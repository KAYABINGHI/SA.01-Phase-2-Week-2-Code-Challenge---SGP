import React, { useState } from 'react';

const GoalItem = ({ goal, onDelete, onEdit }) => {
  const { id, name, targetAmount, savedAmount, category, deadline } = goal;
  const progress = Math.min(Math.round((savedAmount / targetAmount) * 100), 100);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...goal });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editData);
    setIsEditing(false);
  };

  return (
    <div className="goal-card">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input name="name" value={editData.name} onChange={handleEditChange} />
          <input name="targetAmount" type="number" value={editData.targetAmount} onChange={handleEditChange} />
          <input name="savedAmount" type="number" value={editData.savedAmount} onChange={handleEditChange} />
          <input name="category" value={editData.category} onChange={handleEditChange} />
          <input name="deadline" type="date" value={editData.deadline} onChange={handleEditChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h3>{name}</h3>
          <p><strong>Target:</strong> ${targetAmount}</p>
          <p><strong>Saved:</strong> ${savedAmount}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Deadline:</strong> {deadline}</p>
          <div className="progress-bar">
            <div className="filled" style={{ width: `${progress}%` }}>{progress}%</div>
          </div>
          <div className="goal-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(id)} className="delete-btn">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default GoalItem;
