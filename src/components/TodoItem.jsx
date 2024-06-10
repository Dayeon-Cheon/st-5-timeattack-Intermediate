// Hint: TodoItem 컴포넌트는 props 를 받습니다.
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/slices/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const onToggleHandler = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.content}</p>
      </section>
      <section>
        <button onClick={() => onToggleHandler(todo.id)}>완료</button>
        <button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
      </section>
    </li>
  );
}
