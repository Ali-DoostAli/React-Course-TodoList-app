import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo");
      return;
    } else {
      props.submitTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            value={input}
            onChange={changeHandler}
            placeholder="update todo..."
            ref={inputRef}
          />
          <button type="submit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={input}
            onChange={changeHandler}
            placeholder="add todo..."
            ref={inputRef}
          />
          <button type="submit">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
