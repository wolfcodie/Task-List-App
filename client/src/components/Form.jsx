import React, { useContext, useState } from "react";
import { addTodo, updateTextTodo } from "../api/todos";
import { editTextContext, errorContext } from "../App";

function Form({ editText }) {
  const setMsg = useContext(errorContext);
  const setEdit = useContext(editTextContext);
  const [description, setDescription] = useState(null);
  const [text, setText] = useState(editText);

  const handelForm = (e) => {
    e.preventDefault();
    //edit
    if (editText) {
      if (text.length < 3) {
        setMsg({
          type: "error",
          content: "Please fill in all inputs with at least 3 characters.",
        });
      } else {
        setMsg({
          type: "secces",
          content: "Successfully added the to-do item.",
        });
        updateTextTodo(editText.id, text);
        setDescription("");
        setText("");
        setEdit(null);
      }
    } else {
      if (description.length < 3) {
        setMsg({
          type: "error",
          content: "Please fill in all inputs with at least 3 characters.",
        });
      } else {
        setMsg({
          type: "secces",
          content: "Successfully added the to-do item.",
        });
        addTodo(description);
        setDescription("");
        setText("");
      }
    }
  };

  return (
    <form
      onSubmit={handelForm}
      className="flex gap-3  w-[90%] m-auto justify-center items-center"
    >
      <input
        onChange={
          editText
            ? (e) => setText(e.target.value)
            : (e) => setDescription(e.target.value)
        }
        type="text"
        placeholder={editText ? "Edit Task...." : "Your Task...."}
        defaultValue={editText ? editText.description : ""}
        className="p-4 border border-2 border-blue rounded-md w-[40%] max-md:flex-[3] "
      />
      <button
        onClick={handelForm}
        className="bg-blue p-4 border-2 border-blue rounded-md text-white max-md:flex-1"
      >
        {editText ? "Edit Todo" : "Add Todo"}
      </button>
      {editText && (
        <button
          onClick={() => setEdit(null)}
          className="bg-red-500 p-4 rounded-md text-white max-md:flex-1"
        >
          X
        </button>
      )}
    </form>
  );
}

export default Form;
