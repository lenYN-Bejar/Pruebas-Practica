import { useState, Fragment } from "react";
import Dropdown from "./Dropdown";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dropdown opens={open}></Dropdown>
    </div>
  );
}

export default App;
