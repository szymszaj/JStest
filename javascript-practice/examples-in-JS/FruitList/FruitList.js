const fruits = ["Apple", "Banana", "Cherry", "Date", "Grape"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export { FruitList };

const fruitsTwo = ["Mango", "Pineapple", "Strawberry", "Watermelon"];

function FruitListTwo() {
  return (
    <ul>
      {fruitsTwo.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export { FruitListTwo };
