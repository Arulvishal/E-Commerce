import { createContext, useReducer } from "react";

const DialogContext = createContext();

const initialState = {
  isLoginOpen: false,
  isRegisterOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_LOGIN":
      return { isLoginOpen: true, isRegisterOpen: false };
    case "OPEN_REGISTER":
      return { isLoginOpen: false, isRegisterOpen: true };
    case "CLOSE_DIALOG":
      return { isLoginOpen: false, isRegisterOpen: false };
    default:
      return state;
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  return (
    <DialogContext.Provider
      value={{state, dispatch}}
    >
      {children}
    </DialogContext.Provider>
  );
}

export { DialogContext };
