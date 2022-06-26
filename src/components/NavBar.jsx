const NavBar = ({ unCompletedTodo }) => {
  return (
    <header className="header">
      {unCompletedTodo ? <>
        <span>{unCompletedTodo}</span>
      <h2> not completed. </h2></>
      :
      <h2>Set Your Today Todo!</h2>}
    </header>
  );
};

export default NavBar;
