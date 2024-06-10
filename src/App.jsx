import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "./redux/slices/calculatorSlice";
import React from "react";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />{" "}
        만큼을
        <button onClick={() => dispatch(incrementByAmount())}>더할게요</button>
        <button onClick={() => dispatch(decrementByAmount())}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{counter}</p>
      </div>
    </div>
  );
}

export default App;
