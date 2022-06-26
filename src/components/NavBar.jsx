import { useState } from "react";

const NavBar = ({ unCompletedTodo, status, onSelect }) => {
  if (!unCompletedTodo) return <h2>Set Your Today Todo!</h2>;
  return (
    <header className="header">
      <span>{unCompletedTodo}</span>
      <h2>Todos Are Not Completed</h2>
      <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="UnCompleted">UnCompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
