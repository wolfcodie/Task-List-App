import bg from "./assets/bg.png";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Todos from "./components/Todos";
import { createContext, useEffect, useState } from "react";
export const errorContext = createContext("");
export const editTextContext = createContext("");

function App() {
  const [msg, setMsg] = useState(null);
  const [editText, setEditText] = useState(null);
  const [filter, setFilter] = useState("all");

  const handelMsg = () => {
    if (msg === null) {
      return "absolute top-10 left-[-10px] none  bg-red-500 rounded-lg text-white font-semibold";
    } else if (msg.type === "error") {
      return "absolute top-10 left-[-10px] px-14 p-6 bg-red-500 rounded-lg text-white font-semibold";
    } else {
      return "absolute top-10 left-[-10px] px-14 p-6 bg-green-500 rounded-lg text-white font-semibold";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setMsg(null);
    }, 5000);
  }, [msg]);

  return (
    <errorContext.Provider value={setMsg}>
      <editTextContext.Provider value={setEditText}>
        <main className="bg-red h-[100vh] text-center w-[100vw] bg-lightBlue relative overflow-x-hidden">
          {msg !== null && <p className={handelMsg()}>{msg.content}</p>}

          <img
            src={bg}
            alt="bg"
            className="bg absolute top-[-10%] right-[-10%] "
          />
          <h1 className="text-blue text-[55px] font-bold my-14">TaskHub</h1>
          <p className="my-4 text-[20px]">Add a new task</p>
          <Form editText={editText} />
          <Filter setFilter={setFilter} filter={filter} />
          <Todos filter={filter} />
        </main>
      </editTextContext.Provider>
    </errorContext.Provider>
  );
}

export default App;
