import React, { useState, useEffect, useCallback } from "react";
import Elements from "./components/Elements";

export default function Todo() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("array"));
  }, [todo]);

  const addText = () => {
    let array1 = todo; // this declaration refers  the memory
    let array = [...todo]; // this declares the actual values
    array.push(value);
    setValue("");
    setTodo(array);
    localStorage.setItem("array", JSON.stringify(array));
  };

  const deleteLast = () => {
    let array = [...todo];
    array.pop();
    setTodo(array);
    localStorage.setItem("array", JSON.stringify(array));
    console.log(array);
  };

  const deleteElement = useCallback((index) => {
    console.log("parent",index);
    let array = [...todo];
    array.splice(index, 1);
    setTodo(array);
    localStorage.setItem("array", JSON.stringify(array));
  });

  const editElement = useCallback((index) => {
    console.log("parent",index);
    let array = [...todo];
    let value = prompt("Enter the replacement value");
    array.splice(index, 1, value);
    setTodo(array);
    localStorage.setItem("array", JSON.stringify(array));
  });

  return (
    <div>
      {todo?.map((item, index) => {
        return (
          <Elements
            todo={todo}
            item={item}
            index={index}
            deleteElement={deleteElement}
            editElement={editElement}
          />
        );
      })}
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button onClick={addText}>Add</button>
      <button onClick={() => deleteLast()}>Delete Last element</button>
    </div>
  );
}
