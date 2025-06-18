import { useContext } from "react";
import { DialogContext} from "./Context"
import Login from "../Page/Login";
import Register from "../Page/Register";

export default function Dialog() {
  const { state, dispatch } = useContext(DialogContext);

  // const isOpen = isLoginOpen || isRegisterOpen;
  // if (!isOpen) return null;

  return (
    <>
    {(state.isLoginOpen || state.isRegisterOpen) &&(
      <dialog open className="w-full bg-transparent">
        <div className="w-full grid place-content-center h-screen bg-transparent">
          
        <div className="shadow-2xl bg-white p-6 rounded-xl max-w-sm w-full relative">
          <button
            onClick={()=>dispatch({type:"CLOSE_DIALOG"})}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
            X
          </button>
          {state.isLoginOpen && <Login />}
          {state.isRegisterOpen && <Register />}
        </div>
      </div>
    </dialog>)}
            </>
  );
}
