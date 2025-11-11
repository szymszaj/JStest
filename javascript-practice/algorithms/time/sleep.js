function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Start sleeping...");
  await sleep(1000);
  console.log("Awake after 1 seconds!");
}

main();
