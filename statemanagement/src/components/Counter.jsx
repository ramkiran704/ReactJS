import { useContext } from "react";
import { useState } from "react";
import {CountContext} from "../App";

export default function Counter() {
    const {count,setCount}=useContext(CountContext)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}