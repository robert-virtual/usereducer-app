import { useReducer } from "react";

const initState = {
  name: "",
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };

    default:
      throw new Error("Debe proporcionar una accion");
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <h2 className="text-xl">Login</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <input
        className="block m-2 dark:bg-gray-700"
        onChange={({ target }) =>
          dispatch({ type: "name", value: target.value })
        }
        value={state.name}
        type="text"
      />
      <input
        className="block m-2 dark:bg-gray-700"
        onChange={({ target }) =>
          dispatch({ type: "email", value: target.value })
        }
        value={state.email}
        type="email"
      />
      <input
        className="block m-2 dark:bg-gray-700"
        onChange={({ target }) =>
          dispatch({ type: "password", value: target.value })
        }
        value={state.password}
        type="password"
      />
    </>
  );
}
