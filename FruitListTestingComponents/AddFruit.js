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

function AddCars() {
  const [cars, setCars] = useState(["BMW", "Audi"]);
  const [newCar, setNewCar] = useState("");

  const handleAdd = () => {
    setCars([...cars, newCar]);
    setNewCar("");
  };

  return (
    <div>
      <input value={newCar} onChange={(e) => setNewCar(e.target.value)} />
      <button onClick={handleAdd}>Dodaj samochód</button>
      <ul>
        {cars.map((car, idx) => (
          <li key={idx}>{car}</li>
        ))}
      </ul>
    </div>
  );
}
export { AddFruit, AddCars };
