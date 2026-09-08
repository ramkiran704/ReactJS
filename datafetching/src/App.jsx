import { useRef, useState } from 'react';

function App() {
  const numberRef = useRef();
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
    const number = numberRef.current.value;

    setLoading(true);

    try {
      const response = await fetch(
        `https://uselessfacts.jsph.pl/api/v2/facts/random`
      );

      const data = await response.json();

      setFact(data.text);
    } catch (error) {
      console.error("Error:", error);
      setFact("Failed to get fact.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Server is Loading...</div>;
  }

  return (
    <div>
      <input
        ref={numberRef}
        type="number"
        placeholder="Enter Number"
      />

      <button onClick={getFact}>
        Get Fact
      </button>

      <p>{fact}</p>
    </div>
  );
}

export default App;