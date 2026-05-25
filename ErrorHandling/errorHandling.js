//try catch 
console.log("----- TRY CATCH EXAMPLE -----");
try {
  let data = JSON.parse("hello");
  console.log(data);
} 
catch (error) {
  console.log("Error handled successfully");
  console.log(error.message);
}

//error handling in promises
console.log("----- PROMISE ERROR HANDLING -----");
const fakePromise = new Promise((resolve, reject) => {
  let serverWorking = false;
  if (serverWorking) {
    resolve("Data fetched successfully");
  } else {
    reject("Server Error");
  }
});
fakePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Promise Error Handled");
    console.log(error);
  });

//error handling with async await 
console.log("----- ASYNC AWAIT ERROR HANDLING -----");
async function fetchData() {
  try {
    const response = await fetch(
      "https://invalid-api-url.com/data"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Async Await Error Handled");
    console.log(error.message);
  }
}
fetchData();

//custom error messages
console.log("----- CUSTOM ERROR -----");
try {
  let age = -5;
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  console.log(age);
} catch (error) {

  console.log("Custom Error Handled");
  console.log(error.message);

}

//final block implimentation
console.log("----- FINALLY BLOCK -----");
try {
  console.log("Trying code");
  throw new Error("Something failed");
} 
catch (error) {
  console.log("Error caught");
} 
finally {
  console.log("Finally block always runs");
}