import { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";
import './App.css';

const API_URL = "http://localhost:3000/goals";

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals from JSON server when app loads
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((error) => console.error("Error fetching goals:", error));
  }, []);

  // Add a new goal
  const addGoal = (newGoal) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals((prevGoals) => [...prevGoals, data]));
  };

  // Update a goal (used for deposits or edits)
  const updateGoal = (id, updatedFields) => {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((goal) =>
            goal.id === id ? updatedGoal : goal
          )
        );
      });
  };

  // Delete a goal
  const deleteGoal = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
    const deleteGoal = (id) => {
  setGoals(goals.filter(goal => goal.id !== id));
};

const editGoal = (updatedGoal) => {
  setGoals(goals.map(goal => (goal.id === updatedGoal.id ? updatedGoal : goal)));
};
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
      });
  };

<main className="app-container">
  <h1>SMART Goal Planner</h1>
  <GoalForm onAddGoal={addGoal} />
  <Overview goals={goals} />
  <GoalList goals={goals} />
</main>

  return (
    <div className="container">
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <Overview goals={goals} />
      <GoalList goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} />
    </div>
  );
}

export default App;
