import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "UnCompleted", label: "UnCompleted" },
];

const NavBar = ({ unCompletedTodo, selectedOption, onChange }) => {
  if (!unCompletedTodo) return <h2>Set Your Today Todo!</h2>;
  return (
    <header className="header">
      <span>{unCompletedTodo}</span>
      <h2>Todos Are Not Completed</h2>
      <Select
        className="select"
        onChange={onChange}
        value={selectedOption}
        options={options}
      />
    </header>
  );
};

export default NavBar;
