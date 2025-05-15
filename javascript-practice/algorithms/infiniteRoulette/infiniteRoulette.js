function infiniteRoulette() {
  console.log("The roulette game has started!");

  let currentNumber = 1;
  const stopNumber = Math.floor(Math.random() * 100) + 1;

  const interval = setInterval(() => {
    console.log("Drawn number:", currentNumber);

    if (currentNumber === stopNumber) {
      console.log("The roulette stopped at number:", currentNumber);
      clearInterval(interval);
    } else {
      currentNumber++;
    }
  }, 100);
}

infiniteRoulette();
