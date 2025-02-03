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

function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data 1 fetched!");
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data 2 fetched!");
    }, 3000);
  });
}

async function fetchAllData() {
  let [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  console.log(data1);
  console.log(data2);
}

fetchAllData();
