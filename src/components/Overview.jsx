import React from 'react';

const Overview = ({ goals }) => {
  const totalGoals = goals.length;
  const totalTarget = goals.reduce((sum, g) => sum + Number(g.targetAmount), 0);
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const progressPercent = totalTarget ? Math.round((totalSaved / totalTarget) * 100) : 0;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="overview-grid">
        <div className="card stat-card">
          <h4>Total Goals</h4>
          <p>{totalGoals}</p>
        </div>
        <div className="card stat-card">
          <h4>Total Target</h4>
          <p>${totalTarget.toLocaleString()}</p>
        </div>
        <div className="card stat-card">
          <h4>Total Saved</h4>
          <p>${totalSaved.toLocaleString()}</p>
        </div>
        <div className="card stat-card">
          <h4>Overall Progress</h4>
          <div className="progress-bar">
            <div className="filled" style={{ width: `${progressPercent}%` }}>
              {progressPercent}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
