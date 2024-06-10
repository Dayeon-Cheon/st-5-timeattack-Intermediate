import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) => state.todos.todos);
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  return (
    <section>
      <h2>{!isDone ? "Working..." : "Done!"}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
