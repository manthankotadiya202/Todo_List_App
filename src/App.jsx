import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddIcon from "@mui/icons-material/Add";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import Button from "@mui/material/Button";
function App() {
  const [inputList, setInputList] = useState();
  const [indexSet, setIndexList] = useState(-1);
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItem = (e) => {
    e.preventDefault();
    if (inputList !== "") {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
  };
  const updateListOfItem = () => {
    if (inputList !== "") {
      items[indexSet] = inputList;
      setItems((items) => {
        return [...items];
      });
      setIndexList(-1);
      setInputList("");
    }
  };
  const updateItems = (index) => {
    setIndexList(index);
    setInputList(items[index]);
  };
  const deleteItems = (index) => {
    setItems(
      items.filter((e) => {
        return e !== items[index];
      })
    );
  };

  // const handleKeypress = (e) => {
  //   //it triggers by pressing the enter key
  //   // e.preventDefault();
  //   listOfItem();
  // };

  return (
    <>
      <div className="app">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <form onSubmit={listOfItem}>
            <input
              type="text"
              placeholder="Add a Items"
              value={inputList}
              onChange={itemEvent}
            />
            <button onClick={listOfItem} type="submit">
              {" "}
              <AddIcon fontSize="small" />
            </button>

            {indexSet > -1 ? (
              <button onClick={updateListOfItem}>
                <UpgradeIcon />
              </button>
            ) : (
              <></>
            )}
          </form>

          <ol>
            <TodoList
              todolist={items}
              deleteItem={deleteItems}
              updateItem={updateItems}
              setIndex={indexSet}
            />
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
