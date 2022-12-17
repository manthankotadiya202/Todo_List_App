import React from "react";
import "./App.css";
import "./index.css";
import ClearIcon from "@mui/icons-material/Clear";
export default function TodoList({
  todolist,
  deleteItem,
  updateItem,
  setIndex,
  key,
}) {
  const myStyle = { color: "green" };
  const myStyle2 = { color: "orange" };
  return (
    <div>
      {todolist.map((inputList, index) => {
        return (
          <div className="todo__style">
            <i className="fa-times">
              <ClearIcon
                fontSize="small"
                key={index}
                id={index}
                onClick={() => deleteItem(index)}
              ></ClearIcon>
            </i>
            <h2
              onClick={() => updateItem(index)}
              style={index === setIndex ? myStyle : myStyle2}
            >
              {inputList}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
