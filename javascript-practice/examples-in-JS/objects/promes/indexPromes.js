function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data + " Processed!");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return processData(data);
  })
  .then((processedData) => {
    console.log(processedData);
  })
  .catch((error) => {
    console.error(error);
  });
