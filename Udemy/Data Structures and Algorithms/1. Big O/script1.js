const nemo = ["nemo"];

function findNimo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      return console.log("Found NEMO!");
    }
  }
}

findNimo(nemo); // O(n) -> Linear Time
