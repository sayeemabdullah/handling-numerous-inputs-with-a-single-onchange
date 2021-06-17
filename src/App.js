import "./App.css";
import React from "react";

function App() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
  });

  function handleOnChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }
  return (
    <div className="App">
      <>
        <form>
          <div>
            <input
              onChange={handleOnChange}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              onChange={handleOnChange}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </form>
        <div>
          <button onClick={() => console.log(state)}>Submit</button>
        </div>
      </>
    </div>
  );
}

export default App;
