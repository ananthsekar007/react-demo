import React from "react";

export default function Elements(props) {
const {index, item, deleteElement, editElement} = props;
  const onDelete = (index) => {
    deleteElement(index);
    console.log("child",index);
  };

  const onEdit = (index) => {
    editElement(index);
    console.log("child",index);
  };

  return (
    <div>
      <h3>
        {index + 1}.{item}
      </h3>
      <button
        onClick={() => {
          onDelete(index);
        }}
      >
        Delete me
      </button>
      <button
        onClick={() => {
          onEdit(index);
        }}
      >
        Edit me
      </button>
    </div>
  );
}
