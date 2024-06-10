import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert("모든 항목을 입력해 주세요.");
      return;
    }

    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        title,
        content,
        isDone: false,
      })
    );
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button>추가</button>
    </form>
  );
}
