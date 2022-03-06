import { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const ACTION_TYPE = {
  SET_LAT_LONG: "SET_LAT_LONG",
  SET_COFFEE_STORE: "SET_COFFEE_STORE",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_LAT_LONG: {
      return { ...state, latLong: action.payload.latLong };
    }
    case ACTION_TYPE.SET_COFFEE_STORE: {
      return { ...state, coffeeStores: action.payload.coffeeStores };
    }
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
};

const StoreProvider = ({ children }) => {
  const initialState = {
    latLong: "",
    coffeeStores: [],
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
