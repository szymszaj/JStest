const numbers = [1, 2, 3, 4, 5];

function EvenNumbers() {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  return (
    <ul>
      {evenNumbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}
