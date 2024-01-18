import "./App.css";
import { addItem, removeItem } from "./redux/todoListSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todolist.items);

  const itemsList = list.map((item) => {
    return <li onClick={() => dispatch(removeItem(item))}>{item}</li>;
  });

  return (
    // const items = useSelector((state) => state.todoListItems);

    <div className="App">
      <h1>A simple to-do list:</h1>
      <h3>Built with React & Redux!</h3>

      <form style={{ marginBottom: "1em" }}>
        <input
          id="input-field"
          type="text"
          style={{
            marginRight: "1em",
            border: "2px solid black",
            borderRadius: "15px",
            padding: "10px 5px",
            height: "100%",
          }}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addItem(document.getElementById("input-field").value));
            document.getElementById("input-field").value = "";
          }}
          style={{
            marginRight: "1em",
            backgroundColor: "black",
            color: "white",
            border: "2px solid black",
            borderRadius: "15px",
            padding: "10px",
          }}
        >
          Add To-do Item
        </button>
      </form>
      {itemsList}
    </div>
  );
}

export default App;
