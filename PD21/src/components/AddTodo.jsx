import { useState } from "react";

function AddTodo({ onAddToDo }) {
  const [title, setTitle] = useState("");

  return (
    <div>
 
      <button
        onClick={() => {
          setTitle("");
          onAddToDo(title);
        }}
      >
        Add Tasks
      </button>
    </div>
  );
}

export default AddTodo;