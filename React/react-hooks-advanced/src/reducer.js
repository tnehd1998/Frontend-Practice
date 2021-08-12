import { v4 as uuid } from "uuid";

export const initialState = {
  toDos: [],
  completed: [],
};

export const ADD = "add";
export const DEL = "del";
export const COM = "complete";
export const UNCOM = "uncomplete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case COM:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      };
    case UNCOM:
      const aTarget = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        toDos: [...state.toDos, { ...aTarget }],
      };
    default:
      throw new Error();
  }
};

export default reducer;
