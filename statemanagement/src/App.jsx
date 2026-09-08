import { useState, createContext } from "react";
import Counter from "./components/Counter";
import Card from "./components/Card";

export const CountContext = createContext();

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Counter />
      <Card />
    </CountContext.Provider>
  );
}