function infiniteRoulette() {
  console.log("The roulette game has started!");

  const stopNumber = Math.floor(Math.random() * 100) + 1;
  const usedNumbers = new Set();

  const interval = setInterval(() => {
    let randomNumber;
    do {
      randomNumber = parseFloat((Math.random() * 99 + 1).toFixed(2));
    } while (usedNumbers.has(randomNumber));

    usedNumbers.add(randomNumber);

    console.log("Drawn number:", randomNumber);

    if (usedNumbers.size >= stopNumber) {
      console.log("The roulette stopped at number:", randomNumber);
      clearInterval(interval);
    }
  }, 100);
}

infiniteRoulette();
