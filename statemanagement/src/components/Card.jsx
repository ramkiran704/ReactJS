import { useContext } from "react";
import { CountContext } from "../App";

function InnerCard({ count }) {
  return <span>Span count is {count}</span>;
}

export default function Card() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h1>My Card</h1>
      <hr />
      <p>Current Count is: {count}</p>
      <InnerCard count={count} />
    </div>
  );
}