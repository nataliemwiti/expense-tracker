import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ ...form, id: Date.now() });
    setForm({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        name="name"
        placeholder="Enter expense name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Enter description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Enter category"
        value={form.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Enter amount"
        value={form.amount}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;