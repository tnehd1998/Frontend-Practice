import React from "react";
import { COM, DEL, UNCOM } from "../actions";
import { useDispatch } from "../context";

const ToDo = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <span>{text}</span>
      <span onClick={() => dispatch({ type: DEL, payload: id })}>❌</span>
      <span
        onClick={() =>
          dispatch({ type: isCompleted ? COM : UNCOM, payload: id })
        }
      >
        {isCompleted ? "✅" : "🤮"}
      </span>
    </li>
  );
};

export default ToDo;
