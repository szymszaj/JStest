function testPerformance() {
  const text =
    "This is a very long text that will be used to test the performance of different substring checking methods in JavaScript. ".repeat(
      1000
    );

  const searchString = "performance";

  const iterations = 100000;

  console.log("Testing the performance of substring checking methods:");

  console.time("includes");
  for (let i = 0; i < iterations; i++) {
    text.includes(searchString);
  }
  console.timeEnd("includes");

  console.time("indexOf");
  for (let i = 0; i < iterations; i++) {
    text.indexOf(searchString) !== -1;
  }
  console.timeEnd("indexOf");

  console.time("search");
  for (let i = 0; i < iterations; i++) {
    text.search(searchString) !== -1;
  }
  console.timeEnd("search");

  console.time("RegExp.test");
  const regex = new RegExp(searchString);
  for (let i = 0; i < iterations; i++) {
    regex.test(text);
  }
  console.timeEnd("RegExp.test");

  console.time("RegExp.test with 'g' flag");
  const regexG = new RegExp(searchString, "g");
  for (let i = 0; i < iterations; i++) {
    regexG.lastIndex = 0;
    regexG.test(text);
  }
  console.timeEnd("RegExp.test with 'g' flag");
}

testPerformance();
