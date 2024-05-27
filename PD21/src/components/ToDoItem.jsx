import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoItem({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [priority, setPriority] = useState('normal'); 
  let todoContent;
  let progress = "";

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          onClick={() => setIsEditing(false)}
          disabled={todo.title.length === 0}
        >
          Savink
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}><EditIcon /></button>
      </>
    );
  }

  if (todo.done) {
    progress = 'done';
  } else {
    progress = 'in progress';
  }

  const togglePriority = () => {
    if (priority === 'low') {
      setPriority('normal');
    } else if (priority === 'normal') {
      setPriority('high');
    } else {
      setPriority('low');
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      {progress}
      <button onClick={togglePriority}>{priority}</button>
      <button onClick={() => onDelete(todo.id)}><DeleteIcon /></button>
    </label>
  );
}

export default ToDoItem;
