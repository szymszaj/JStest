import { useState } from "react";

function AddFruit() {
  const [fruits, setFruits] = useState(["jabłko", "banan"]);
  const [newFruit, setNewFruit] = useState("");

  const handleAdd = () => {
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  };

  return (
    <div>
      <input value={newFruit} onChange={(e) => setNewFruit(e.target.value)} />
      <button onClick={handleAdd}>Dodaj owoc</button>
      <ul>
        {fruits.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// export default AddFruit;
