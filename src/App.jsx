import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [title] = useState("CI/CD Practice App");

  return (
    <div className="app">
      <header className="app-header">
        <h1>{title}</h1>
        <p>Welcome to the React testing practice project</p>
      </header>
      <main className="app-main">
        <Counter />
      </main>
    </div>
  );
}

export default App;
