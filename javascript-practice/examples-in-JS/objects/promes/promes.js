function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}
fetchData().then((data) => {
  console.log(data);
});
async function fetchDataAsync() {
  let data = await fetchData();
  console.log(data);
}

fetchDataAsync();
