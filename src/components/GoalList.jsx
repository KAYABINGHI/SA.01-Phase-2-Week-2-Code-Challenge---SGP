import React from 'react';
import GoalItem from './GoalItem';

const GoalList = ({ goals, onDelete, onEdit }) => {
  if (goals.length === 0) return <p>No goals added yet.</p>;

  return (
    <div className="goal-list">
      {goals.map(goal => (
        <GoalItem key={goal.id} goal={goal} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default GoalList;
