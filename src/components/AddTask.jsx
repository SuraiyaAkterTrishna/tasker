import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  function handleChangeText(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input
        value={text}
        onChange={handleChangeText}
        style={{ marginRight: "10px", marginLeft: "67px" }}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
