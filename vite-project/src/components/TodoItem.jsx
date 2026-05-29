function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li className="todo-item">
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;