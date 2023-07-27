function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = "Some data1";
    callback(null, data); // Invoke the callback with the result
  }, 1000);
}

// Usage
fetchData((error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
});

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data2";
      resolve(data); // Resolve the Promise with the result
    }, 1000);
  });
}

// Usage
fetchData2()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data3";
      resolve(data); // Resolve the Promise with the result
    }, 1000);
  });
}

// Usage
async function getData() {
  try {
    const data = await fetchData3();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
