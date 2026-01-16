const vegetables = ["Carrot", "Broccoli", "Spinach", "Tomato", "Pepper"];

function VegetableList() {
  return (
    <ul>
      {vegetables.map((vegetable, index) => (
        <li key={index}>{vegetable}</li>
      ))}
    </ul>
  );
}

export { VegetableList };

const beverages = ["Coffee", "Tea", "Juice", "Water", "Smoothie"];

function BeverageList() {
  return (
    <ul>
      {beverages.map((beverage, index) => (
        <li key={index}>{beverage}</li>
      ))}
    </ul>
  );
}

export { BeverageList };

const snacks = ["Chips", "Nuts", "Cookies", "Popcorn", "Candy"];

function SnackList() {
  return (
    <ul>
      {snacks.map((snack, index) => (
        <li key={index}>{snack}</li>
      ))}
    </ul>
  );
}

export { SnackList };
