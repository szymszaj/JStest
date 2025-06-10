import { useState } from "react";

function RemoveFruit() {
  const [fruits, setFruits] = useState(["jabłko", "banan", "gruszka"]);

  const handleRemove = (indexToRemove) => {
    setFruits(fruits.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <ul>
      {fruits.map((fruit, idx) => (
        <li key={idx}>
          {fruit} <button onClick={() => handleRemove(idx)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
}
