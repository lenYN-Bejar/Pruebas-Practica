import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [open, close] = useState(false);

  return (
    <div className="App">
      {open ? (
        <dialog>
          <h1>Sabias Habrir modales?</h1>
          <p>Totalmente Nativo!</p>
          <button onClick={() => close(false)}>Salir</button>
        </dialog>
      ) : (
        <button onClick={() => close(true)}>Abrir modal</button>
      )}
    </div>
  );
}

export default App;
