import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: "",
    category: "",
    deadline: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      ...formData,
      id: Date.now().toString(),
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: parseFloat(formData.savedAmount),
      createdAt: new Date().toISOString().split("T")[0],
    };

    onAddGoal(newGoal);

    // Reset form
    setFormData({
      name: "",
      targetAmount: "",
      savedAmount: "",
      category: "",
      deadline: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <h2>Add New Goal</h2>
      <input
        type="text"
        name="name"
        placeholder="Goal Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="targetAmount"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="savedAmount"
        placeholder="Initial Saved Amount"
        value={formData.savedAmount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
