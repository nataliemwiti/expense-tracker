import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Light Materials",
      description: "Workshop & Lunch",
      category: "food",
      amount: 2000,
      date: "2025-10-10",
    },
    {
      id: 2,
      name: "LPG Refill",
      description: "Home use",
      category: "personal",
      amount: 1500,
      date: "2025-10-11",
    },
    {
      id: 3,
      name: "Groceries",
      description: "Weekly shopping",
      category: "food",
      amount: 5000,
      date: "2025-10-12",
    },
    {
      id: 4,
      name: "Internet Bill",
      description: "Monthly subscription",
      category: "utilities",
      amount: 1200,
      date: "2025-10-13",
    },
    {
      id: 5,
      name: "Movie Night",
      description: "Cinema with friends",
      category: "entertainment",
      amount: 800,
      date: "2025-10-14",
    },
    {
      id: 6,
      name: "Gym Membership",
      description: "Monthly fee",
      category: "health",
      amount: 2500,
      date: "2025-10-15",
    },
    {
      id: 7,
      name: "Book Purchase",
      description: "New novel",
      category: "education",
      amount: 600,
      date: "2025-10-16",
    },
    {
      id: 8,
      name: "Dining Out",
      description: "Restaurant dinner",
      category: "food",
      amount: 3000,
      date: "2025-10-17",
    },
    {
      id: 9,
      name: "Electricity Bill",
      description: "Monthly payment",
      category: "utilities",
      amount: 2200,
      date: "2025-10-18",
    },
    {
      id: 10,
      name: "Concert Tickets",
      description: "Live music event",
      category: "entertainment",
      amount: 4500,
      date: "2025-10-19",
    },
  ]);

  const [search, setSearch] = useState("");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase()) ||
      e.category.toLowerCase().includes(search.toLowerCase())
  );

 return (
    <div className="app-container">
  
      <div className="sidebar">
        <h2>Add Expense</h2>
        <ExpenseForm addExpense={addExpense} />
      </div>

      
      <div className="main">
        <header className="header">
          <h1>Expense Tracker</h1>
          <p>
            Keep track of your financial records. Record, categorize, and manage
            your spending easily.
          </p>
        </header>

        <SearchBar search={search} setSearch={setSearch} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default App;