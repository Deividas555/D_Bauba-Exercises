import ToDoItem from "./ToDoItem";

function ToDosList({ todos, onChangeToDo, onDeleteToDo }) {


  return (
    <>
      <ol style={{listStyle: "none"}}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <ToDoItem
              todo={todo}
              onChange={onChangeToDo}
              onDelete={onDeleteToDo}
            />
          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDosList;