import { useReducer } from "react";
import Login from "./pages/Login";

const initState = { count: 0, name: "Robert" };
function reducer(state, action) {
  switch (action) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };

    default:
      return { ...state, count: state.count + 1 };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="dark:bg-black w-screen h-screen dark:text-white">
      <main className="p-10">
        <h1 className="text-xl">Use Reducer</h1>

        <Login />

        <hr />
        <h2 className="text-xl">Counter: {state.count}</h2>
        <h2 className="text-xl">Name: {state.name}</h2>
        <button
          onClick={() => dispatch("increment")}
          className="bg-blue-500 p-2 m-4"
        >
          increment
        </button>
        <button
          onClick={() => dispatch("reset")}
          className="bg-blue-500 p-2 m-4"
        >
          reset
        </button>
        <button
          onClick={() => dispatch("decrement")}
          className="bg-blue-500 p-2 m-4"
        >
          decrement
        </button>
      </main>
    </div>
  );
}

export default App;
